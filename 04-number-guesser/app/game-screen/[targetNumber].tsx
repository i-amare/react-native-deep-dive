import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function GameScreen() {
  const { targetNumber } = useLocalSearchParams();

  return (
    <View className='flex-1'>
      <Link href='/'>Please Work! - {targetNumber} </Link>
    </View>
  );
}
