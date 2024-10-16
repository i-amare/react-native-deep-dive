import { Dimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function BottomSheet({
  children,
}: {
  children?: React.ReactNode;
}) {
  const VH_RATIO = 4;

  const { height: SCREEN_HEIGHT } = Dimensions.get('window');
  const sheetPosition = SCREEN_HEIGHT / VH_RATIO;

  const context = useSharedValue({ y: 0 });

  const translateY = useSharedValue(0);

  const rBottomSheet = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      const yTranslation = event.translationY + context.value.y;
      const min = -SCREEN_HEIGHT / VH_RATIO + 75;
      const max = SCREEN_HEIGHT / (10 - VH_RATIO) - 75;
      if (yTranslation > min && yTranslation < max) {
        translateY.value = yTranslation;
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[{ top: sheetPosition, left: 0 }, { ...rBottomSheet }]}
        className='absolute h-screen w-screen flex-1 rounded-t-3xl bg-white'
      >
        <View className='mx-auto my-4 h-1 w-12 rounded-xl bg-gray-950' />
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
