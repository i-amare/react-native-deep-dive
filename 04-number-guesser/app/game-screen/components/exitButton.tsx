import { Link } from 'expo-router';
import { Text, TouchableHighlight } from 'react-native';

export default function ExitButton() {
  return (
    <TouchableHighlight className='mx-auto w-11/12 rounded-xl bg-rose-500 py-4'>
      <Link href='/' className='w-full'>
        <Text className='w-full text-center text-2xl font-vermin uppercase'>
          Exit Game
        </Text>
      </Link>
    </TouchableHighlight>
  );
}
