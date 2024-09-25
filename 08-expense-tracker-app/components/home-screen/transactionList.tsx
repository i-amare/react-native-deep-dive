import { Transaction } from '@/types/Account';
import { FlatList, Text, View } from 'react-native';

type TransactionListProps = {
  data: Transaction[];
};

export default function TransactionList({ data }: TransactionListProps) {
  return (
    <FlatList
      className='w-screen flex-1'
      data={data}
      renderItem={({ item }) => <TransactionItem {...item} />}
      ListFooterComponent={<View className='h-[40vh] bg-red-400' />}
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
    <Text>
      {name} - {amount} - {description} - {category} - {date.getDate()}
    </Text>
  );
}
