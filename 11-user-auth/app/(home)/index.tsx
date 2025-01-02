import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function HomeScreen() {
  const { logoutUser } = useContext(AuthContext);

  const onLogoutButtonPress = () => {
    logoutUser();
  };

  return (
    <View className='flex-1 items-center justify-center bg-black p-12'>
      <Text className='text-3xl text-white'>Home Screen</Text>
      <Pressable
        onPressIn={onLogoutButtonPress}
        className='mt-4 h-14 w-full items-center justify-center rounded-lg bg-gray-900'
      >
        <Text className='text-center font-hurmit text-xl text-white'>
          Logout
        </Text>
      </Pressable>
    </View>
  );
}
