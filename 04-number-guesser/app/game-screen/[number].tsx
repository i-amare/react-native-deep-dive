import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function GameScreen() {
  const { number } = useLocalSearchParams();

  return (
    <View className='flex-1'>
      <Link href='/'>Please Work! - {number} </Link>
    </View>
  );
}
