import { AccountContext } from '@/context/AccountContext';
import { useContext } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const SCROLL_RATIO = 1.15;

export default function HomeScreen() {
  const accountContext = useContext(AccountContext);

  const scrollContext = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scrollContext.value = translateY.value;
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + scrollContext.value;
      console.log(translateY.value);
    });

  const fastScroll = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const slowScroll = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value / SCROLL_RATIO }],
  }));

  return (
    <View className='flex-1 items-center bg-green-900'>
      <Animated.View
        style={slowScroll}
        className='h-[25vh] w-full bg-red-400'
      ></Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={fastScroll}
          className='mx-auto h-2 w-16 rounded-md bg-gray-400'
        ></Animated.View>
      </GestureDetector>
      <Animated.View
        style={fastScroll}
        className='h-[50vh] w-full bg-blue-400'
      ></Animated.View>
      {/* <AccountCard balance={accountContext.balance} />
      <BottomSheet>
        <TransactionList data={accountContext.transactionHistory} />
      </BottomSheet> */}
    </View>
  );
}
