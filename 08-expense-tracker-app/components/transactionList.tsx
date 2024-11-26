import { Transaction } from '@/types/Account';
import { FlatList, Text, View } from 'react-native';

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
  return (
    <View className='w-full py-2'>
      <Text className='text-sm font-semibold text-gray-200'>
        {date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
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
    </View>
  );
}
