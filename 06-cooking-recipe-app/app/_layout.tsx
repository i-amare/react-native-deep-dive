import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView className='flex-1'>
      <Stack />
    </SafeAreaView>
  );
}
