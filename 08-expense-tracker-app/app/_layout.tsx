import { View } from 'react-native';
import { Slot } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <View className='flex-1 bg-red-400'>
      <Slot />
    </View>
  );
}
