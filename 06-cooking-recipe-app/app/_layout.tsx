import { FontAwesome6 } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

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
