import { Dimensions, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-gray-950'>
      <BottomSheet />
    </View>
  );
}

function BottomSheet() {
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');
  const sheetPosition = SCREEN_HEIGHT / 2.75;

  const translateY = useSharedValue(0);

  const rBottomSheet = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const gesture = Gesture.Pan().onUpdate((event) => {
    translateY.value = event.translationY;
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[{ top: sheetPosition }, { ...rBottomSheet }]}
        className='absolute h-screen w-screen flex-1 rounded-t-3xl bg-white'
      >
        <View className='mx-auto mt-4 h-1 w-12 rounded-xl bg-gray-950'></View>
      </Animated.View>
    </GestureDetector>
  );
}
