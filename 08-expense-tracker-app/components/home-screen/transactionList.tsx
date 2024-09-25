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
      renderItem={({ item }) => <TransactionItem {...item} />}
      ListFooterComponent={<View className='h-[40vh] bg-red-400' />}
      ItemSeparatorComponent={() => (
        <View className='mx-auto h-1 w-full rounded-lg bg-gray-200' />
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
      <Text className='translate-y-1 text-sm font-semibold text-gray-500'>
        {date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
      </Text>
      <View className='flex-row items-center justify-between'>
        <View>
          <Text className='text-lg font-semibold'>{name}</Text>
          <Text className='-translate-y-1 text-sm font-semibold text-gray-500'>
            {category}
          </Text>
        </View>
        <Text className='text-lg -translate-y-1 font-semibold'>R{amount}</Text>
      </View>
    </View>
  );
}
