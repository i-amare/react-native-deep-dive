import { AntDesign, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

interface AccountCardProps {
  balance: number;
  setModalVisibility: (value: boolean) => void;
  setModalState: (value: 'Expense' | 'Income') => void;
  slowScroll: any;
}

export default function AccountCard({
  balance,
  setModalVisibility,
  slowScroll,
  setModalState,
}: AccountCardProps) {
  const router = useRouter();

  return (
    <Animated.View style={slowScroll} className='w-full'>
      <View className='flex aspect-[4/2] w-full rounded-3xl bg-black px-4 pt-6'>
        <View className='flex flex-row'>
          <View className='flex'>
            <Text className='text-4xl text-white'>
              {new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: 'ZAR',
              }).format(balance)}
            </Text>
          </View>
        </View>
        <View className='mt-3 flex flex-row'>
          <Button
            text='Top Up'
            onPress={() => {
              setModalVisibility(true);
              setModalState('Income');
            }}
            icon={<AntDesign name='plus' color='white' size={12} />}
          />
          <View className='mr-2'></View>
          <Button
            text='Add Expense'
            onPress={() => {
              setModalVisibility(true);
              setModalState('Expense');
            }}
            icon={<Feather name='arrow-up-right' color='white' size={12} />}
          />
        </View>
      </View>
    </Animated.View>
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
