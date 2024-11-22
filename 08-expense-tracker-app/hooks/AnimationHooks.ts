import { Gesture } from 'react-native-gesture-handler';
import {
  Easing,
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
