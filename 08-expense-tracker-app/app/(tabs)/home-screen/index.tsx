import BottomSheet from '@/components/home-screen/bottomSheet';
import { AccountContext } from '@/context/AccountContext';
import { useContext } from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  const accountContext = useContext(AccountContext);

  return (
    <View className='flex-1 bg-gray-950'>
      <BottomSheet>
        <Text className='text-lg font-semibold text-black'>
          Balance: {accountContext.balance.toFixed(2)}
        </Text>
      </BottomSheet>
    </View>
  );
}
