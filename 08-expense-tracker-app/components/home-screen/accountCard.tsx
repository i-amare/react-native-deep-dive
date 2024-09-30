import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Text, View } from 'react-native';

interface AccountCardProps {
  balance: number;
}

export default function AccountCard({ balance }: AccountCardProps) {
  return (
    <View className='w-11/12'>
      <View className='flex aspect-[4/2] w-full flex-row rounded-xl bg-slate-800 p-2'>
        <BlurView
          intensity={10}
          className='mr-4 flex aspect-square h-12 items-center justify-center rounded-full'
        >
          <MaterialIcons
            name='account-balance-wallet'
            size={26}
            color='white'
          />
        </BlurView>
        <View className='flex'>
          <Text className='text-xl font-semibold text-white'>
            R{balance.toFixed(2)}
          </Text>
          <Text className='font-semibold text-gray-400'>Account Balance</Text>
        </View>
      </View>
    </View>
  );
}
