import { AuthContext } from '@/contexts/AuthContext';
import { useRootNavigationState, useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function HomeScreen() {
  const { isAuthenticated, logoutUser } = useContext(AuthContext);
  const router = useRouter();
  const rootNavigation = useRootNavigationState();

  const onLogoutButtonPress = () => {
    logoutUser();
  };

  useEffect(() => {
    if (!isAuthenticated && rootNavigation?.key)
      router.navigate('/(auth)/login');
  }, [isAuthenticated, rootNavigation]);

  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <Text className='text-3xl text-white'>Home Screen</Text>
      <Pressable
        onPressIn={onLogoutButtonPress}
        className='mt-4 h-14 w-full items-center justify-center rounded-lg bg-gray-900'
      >
        <Text className='text-center font-hurmit text-xl text-white'>
          Continue
        </Text>
      </Pressable>
    </View>
  );
}
