import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Pressable, Text, View } from 'react-native';

interface AccountCardProps {
  balance: number;
}

export default function AccountCard({ balance }: AccountCardProps) {
  return (
    <View className='w-full'>
      <View className='flex aspect-[4/2] w-full rounded-3xl bg-black px-4 pt-6'>
        <View className='flex flex-row'>
          <View className='mr-4 overflow-hidden rounded-full'>
            <BlurView
              intensity={10}
              tint='extraLight'
              className='flex aspect-square h-12 items-center justify-center rounded-full'
            >
              <MaterialIcons
                name='account-balance-wallet'
                size={26}
                color='white'
              />
            </BlurView>
          </View>
          <View className='flex'>
            <Text className='text-4xl font-semibold text-white'>
              R{balance.toFixed(2)}
            </Text>
            <Text className='font-semibold text-gray-400'>Account Balance</Text>
          </View>
        </View>
        <View className='mt-3 flex flex-row'>
          <Button
            text='Top Up'
            onPress={() => null}
            icon={<AntDesign name='plus' color='white' size={12} />}
          />
          <View className='mr-2'></View>
          <Button
            text='Send Money'
            onPress={() => null}
            icon={<Feather name='arrow-up-right' color='white' size={12} />}
          />
        </View>
      </View>
    </View>
  );
}

interface ButtonProps {
  onPress: () => void;
  text: string;
  icon: React.ReactNode;
}

function Button({ text, icon, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center rounded-2xl bg-gray-800 px-4 py-2`}
    >
      {icon}
      <View className='mr-2' />
      <Text className='-translate-y-[1px] text-center text-xs text-white'>
        {text}
      </Text>
    </Pressable>
  );
}
