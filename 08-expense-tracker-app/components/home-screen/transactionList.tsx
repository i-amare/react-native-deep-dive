import { Transaction } from '@/types/Account';
import { FlatList, Text } from 'react-native';

type TransactionListProps = {
  data: Transaction[];
};

export default function TransactionList({ data }: TransactionListProps) {
  return (
    <FlatList
      className='flex-1'
      data={data}
      renderItem={({ item }) => <TransactionItem {...item} />}
    />
  );
}

type TransactionProps = Transaction;

function TransactionItem({ id, amount, date, description }: TransactionProps) {
  return (
    <Text>
      {amount} - {description}
    </Text>
  );
}
