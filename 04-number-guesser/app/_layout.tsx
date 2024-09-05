import { Image, SafeAreaView } from 'react-native';
import HomePage from './index';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  useFonts({
    '8bit-dragon': require('../assets/fonts/EightBitDragon-anqx.ttf'),
    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'vermin-vibes': require('../assets/fonts/VerminVibes1989Regular-m77m.ttf'),
  });

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
