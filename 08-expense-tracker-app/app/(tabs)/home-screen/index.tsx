import BottomSheet from '@/components/home-screen/bottomSheet';
import TransactionList from '@/components/home-screen/transactionList';
import { AccountContext } from '@/context/AccountContext';
import { useContext } from 'react';
import { View } from 'react-native';

export default function HomeScreen() {
  const accountContext = useContext(AccountContext);

  return (
    <View className='flex-1 bg-gray-950'>
      <BottomSheet>
        <TransactionList data={accountContext.transactionHistory} />
      </BottomSheet>
    </View>
  );
}
