import { Easing } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useButtonAnimation = () => {
  const scale = useSharedValue(1);

  const setScale = (x: number) => {
    scale.value = withTiming(x, {
      easing: Easing.inOut(Easing.ease),
      duration: 100,
    });
  };

  const longTap = Gesture.LongPress()
    .onBegin(() => {
      setScale(0.9);
    })
    .onEnd(() => {
      setScale(1);
    });

  const shortTap = Gesture.Tap()
    .onBegin(() => {
      setScale(0.9);
    })
    .onEnd(() => {
      setScale(1);
    });

  const tapGesture = Gesture.Simultaneous(longTap, shortTap);

  const scaleOnClick = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return { tapGesture, scaleOnClick };
};
