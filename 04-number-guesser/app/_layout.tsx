import { Image, SafeAreaView } from 'react-native';
import HomePage from './index';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaView className='flex-1'>
      <Image
        className='absolute h-[100vh] w-[100vw]'
        resizeMode='cover'
        source={require('../assets/images/pixel_art_background.jpg')}
      />
      <Slot />
    </SafeAreaView>
  );
}
