import { Stack } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { SafeAreaView } from 'react-native';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <SafeAreaView className='flex-1 bg-gray-950'>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}
