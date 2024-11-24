import TransactionList from '@/components/transactionList';
import { AccountContext } from '@/context/AccountContext';
import { BlurView } from 'expo-blur';
import { useContext } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

export default function HistoryScreen() {
  const { transactionHistory } = useContext(AccountContext);

  return (
    <SafeAreaView className='flex-1 bg-gray-950'>
      <Image
        source={require('@/assets/images/bg-image.jpg')}
        resizeMode='stretch'
        className='absolute left-0 top-0 h-screen w-full'
      />
      <Text className='m-4 mb-8 text-3xl font-bold text-white'>
        Transaction History
      </Text>
      <BlurView
        className='h-full w-full rounded-3xl pt-8'
        intensity={80}
        tint='dark'
      >
        <TransactionList data={transactionHistory} />
      </BlurView>
    </SafeAreaView>
  );
}
