import { AccountContext } from '@/context/AccountContext';
import { useDeleteAnimation } from '@/hooks/AnimationHooks';
import { Transaction } from '@/types/Account';
import { FontAwesome } from '@expo/vector-icons';
import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

type TransactionListProps = {
  data: Transaction[];
};

export default function TransactionList({ data }: TransactionListProps) {
  return (
    <FlatList
      className='mx-auto w-11/12 flex-1'
      data={data}
      keyExtractor={(item) => item.id || Math.random().toString()}
      renderItem={({ item }) => <TransactionItem {...item} />}
      ListFooterComponent={<View className='h-[40vh]' />}
      ItemSeparatorComponent={() => (
        <View className='mx-auto h-[1px] w-full rounded-lg bg-gray-200' />
      )}
    />
  );
}

type TransactionProps = Transaction;

function TransactionItem({
  id,
  name,
  amount,
  date,
  category,
  description,
}: TransactionProps) {
  const { removeTransaction } = useContext(AccountContext);

  const { panGesture, itemSwipeAnimation, iconOpacityAnimation } =
    useDeleteAnimation(() => removeTransaction(id));

  return (
    <GestureDetector gesture={panGesture}>
      <>
        <Animated.View
          style={itemSwipeAnimation}
          className='relative w-full py-2'
        >
          <Text className='text-sm font-semibold text-gray-200'>
            {date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })}
          </Text>
          <View className='flex-row items-center justify-between'>
            <View>
              <Text className='font-semibold text-white'>{name}</Text>
              <Text className='-translate-y-1 text-sm text-gray-200'>
                {category}
              </Text>
            </View>
            <Text
              className={`-translate-y-1 font-semibold ${
                amount > 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {amount > 0 ? `R${amount}` : `-R${Math.abs(amount)}`}
            </Text>
          </View>
        </Animated.View>
        <Animated.View
          style={iconOpacityAnimation}
          className='absolute bottom-0 right-0 top-0 flex w-12 items-center justify-center'
        >
          <View className='flex aspect-square w-10 items-center justify-center rounded-lg bg-red-400'>
            <FontAwesome size={20} color={'white'} name='trash-o' />
          </View>
        </Animated.View>
      </>
    </GestureDetector>
  );
}
