import { View } from 'react-native';
import Button from './components/button';
import NumberInput from './components/textInput';

export default function HomePage() {
  return (
    <View className='flex-1 items-center justify-center bg-[#38bdf8]'>
      <NumberInput />
      <View className='flex w-full flex-row justify-evenly space-x-4'>
        <Button text='Start' />
        <Button text='Confirm' />
      </View>
    </View>
  );
}
