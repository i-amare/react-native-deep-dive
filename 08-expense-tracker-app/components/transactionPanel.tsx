import { BlurView } from 'expo-blur';
import { Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import TransactionList from './transactionList';

export default function TransactionPanel({
  fastScroll,
  panGesture,
  transactions,
}: {
  fastScroll: any;
  panGesture: any;
  transactions: any[];
}) {
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={fastScroll}
        className='h-screen w-full overflow-hidden rounded-3xl bg-white/5'
      >
        <BlurView className='h-full w-full' intensity={80} tint='dark'>
          <View className='mx-auto my-4 h-1 w-12 rounded-xl bg-white' />
          <Text className='px-4 mb-4 text-2xl font-semibold text-white'>
            Transactions
          </Text>
          <TransactionList data={transactions} />
        </BlurView>
      </Animated.View>
    </GestureDetector>
  );
}
