import AccountCard from '@/components/home-screen/accountCard';
import TransactionList from '@/components/home-screen/transactionList';
import { AccountContext } from '@/context/AccountContext';
import { useContext } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const SCROLL_RATIO = 1.5;
const CARD_TRANSLATION = 50;

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
    transform: [{ translateY: translateY.value / SCROLL_RATIO + CARD_TRANSLATION }],
  }));

  return (
    <View className='flex-1 items-center bg-green-900 pt-14'>
      <Animated.View style={slowScroll} className='w-full'>
        <AccountCard balance={accountContext.balance} />
      </Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={fastScroll} className='w-full bg-white rounded-3xl'>
          <View className='mx-auto my-4 h-1 w-12 rounded-xl bg-gray-950' />
          <TransactionList data={accountContext.transactionHistory} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
