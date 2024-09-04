import { Image, SafeAreaView } from 'react-native';
import HomePage from './index';

export default function RootLayout() {
  return (
    <SafeAreaView className='flex-1'>
      <Image
        className='absolute h-[100vh] w-[100vw]'
        resizeMode='cover'
        source={require('../assets/images/pixel_art_background.jpg')}
      />
      <HomePage />
    </SafeAreaView>
  );
}
