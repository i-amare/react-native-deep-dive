import AccountCard from '@/components/home-screen/accountCard';
import BottomSheet from '@/components/home-screen/bottomSheet';
import TransactionList from '@/components/home-screen/transactionList';
import { AccountContext } from '@/context/AccountContext';
import { useContext } from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  const accountContext = useContext(AccountContext);

  return (
    <View className='flex-1 items-center bg-gray-950'>
      <AccountCard balance={accountContext.balance} />
      <BottomSheet>
        <TransactionList data={accountContext.transactionHistory} />
      </BottomSheet>
    </View>
  );
}

