import { Text, TouchableOpacity, View } from 'react-native';
import BlurContainer from '../components/BlurContainer';
import Button from '../components/button';
import { useRouter } from 'expo-router';

export default function GameOverScreen() {
  const router = useRouter();

  return (
    <View className='flex-1 items-center justify-center'>
      <BlurContainer>
        <Text className='mb-2 text-center font-vermin text-7xl text-red-500'>
          Game Over
        </Text>
        <TouchableOpacity
          onPress={() => router.navigate('/')}
          className='w-full rounded-lg bg-green-600 py-2'
        >
          <Text className='text-center font-vermin text-4xl text-white'>
            Play Again ?
          </Text>
        </TouchableOpacity>
      </BlurContainer>
    </View>
  );
}
