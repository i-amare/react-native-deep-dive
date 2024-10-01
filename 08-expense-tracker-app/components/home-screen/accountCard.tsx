import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Pressable, Text, View } from 'react-native';

interface AccountCardProps {
  balance: number;
}

export default function AccountCard({ balance }: AccountCardProps) {
  return (
    <View className='w-11/12'>
      <View className='flex aspect-[4/2] w-full rounded-xl bg-black p-2'>
        <View className='flex flex-row'>
          <BlurView
            intensity={10}
            tint='extraLight'
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
        <View className='flex flex-row'>
          <Button text='Top Up' onPress={() => null} />
            <View className="mr-2"></View>
          <Button text='Send Money' onPress={() => null} />
        </View>
      </View>
    </View>
  );
}

interface ButtonProps {
  onPress: () => void;
  text: string;
}

function Button({ text, onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress} className={`rounded-2xl bg-gray-800 py-2 px-4`}>
      <Text className='text-center text-white'>{text}</Text>
    </Pressable>
  );
}
