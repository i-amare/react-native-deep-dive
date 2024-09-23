import { View } from 'react-native';
import { Slot, useRouter } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { useEffect } from 'react';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  
  const router = useRouter();
  useEffect (() => {
    router.navigate('/home-screen');
  }, []);

  return (
    <View className='flex-1'>
      <Slot />
    </View>
  );
}
