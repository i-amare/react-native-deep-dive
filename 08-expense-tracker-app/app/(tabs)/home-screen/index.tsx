import BottomSheet from '@/components/home-screen/bottomSheet';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-gray-950'>
      <BottomSheet>
        <Text className='text-lg font-semibold text-black'>Test</Text>
      </BottomSheet>
    </View>
  );
}
