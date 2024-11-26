import { Gesture } from 'react-native-gesture-handler';
import {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useModalAnimation = () => {
  const modalScrollContext = useSharedValue(100);

  const toggleModal = () => {
    modalScrollContext.value = modalScrollContext.value === 0 ? 100 : 0;
  };

  const setModalVisibility = (isVisible: boolean) => {
    modalScrollContext.value = isVisible ? 0 : 100;
  };

  const modalAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(`${modalScrollContext.value}%`, {
          duration: 450,
          easing: Easing.inOut(Easing.ease),
        }),
      },
    ],
  }));

  return { toggleModal, modalAnimation, setModalVisibility };
};

export const useScrollAnimation = () => {
  const CONSTANTS = {
    SCROLL_RATIO: 1.5,
    CARD_TRANSLATION: 75,
    MAX_SCROLL: 75,
    MIN_SCROLL: -125,
  } as const;

  const scrollContext = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scrollContext.value = translateY.value;
    })
    .onUpdate((e) => {
      const newTranslation = e.translationY + scrollContext.value;
      if (
        newTranslation > CONSTANTS.MIN_SCROLL &&
        newTranslation < CONSTANTS.MAX_SCROLL
      ) {
        translateY.value = newTranslation;
      }
    });

  const fastScroll = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const slowScroll = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          translateY.value / CONSTANTS.SCROLL_RATIO +
          CONSTANTS.CARD_TRANSLATION,
      },
    ],
  }));

  return { panGesture, fastScroll, slowScroll };
};

export const useDeleteAnimation = (onDelete: () => void) => {
  const MAX_TRANSLATION_LEFT = -200;
  const MAX_TRANSLATION_RIGHT = 0;
  const DELETION_THRESHOLD = -100;
  const OPACITY_BUFFER = 20;

  const xTranslation = useSharedValue(0);
  const yTranslation = useSharedValue(0);
  const itemOpacity = useSharedValue(1);
  const iconOpacity = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onChange(({ translationX }) => {
      if (
        translationX > MAX_TRANSLATION_LEFT &&
        translationX < MAX_TRANSLATION_RIGHT
      ) {
        xTranslation.value = translationX;
      }
      iconOpacity.value = Math.max(
        0,
        (DELETION_THRESHOLD + OPACITY_BUFFER / 2 - translationX) /
          OPACITY_BUFFER,
      );
    })
    .onEnd(() => {
      if (xTranslation.value < DELETION_THRESHOLD) {
        itemOpacity.value = withTiming(0);
        iconOpacity.value = withTiming(0);
        yTranslation.value = withTiming(-50, undefined, (isFinished) => {
          if (isFinished) {
            runOnJS(onDelete)();
          }
        });
      } else {
        xTranslation.value = withTiming(0);
        iconOpacity.value = withTiming(0);
        itemOpacity.value = withTiming(1);
      }
    });

  const itemSwipeAnimation = useAnimatedStyle(() => ({
    transform: [
      { translateX: xTranslation.value },
      { translateY: yTranslation.value },
    ],
    opacity: itemOpacity.value,
  }));

  const iconOpacityAnimation = useAnimatedStyle(() => ({
    opacity: iconOpacity.value,
    transform: [{ translateY: yTranslation.value }],
  }));

  return {
    panGesture,
    itemSwipeAnimation,
    iconOpacityAnimation
  }
};