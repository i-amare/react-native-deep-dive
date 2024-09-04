import { BlurView } from 'expo-blur';
import { View } from 'react-native';
import Button from './components/button';
import NumberInput from './components/textInput';

export default function HomePage() {
  return (
    <View className='flex-1 items-center justify-center'>
      <View className='overflow-hidden rounded-xl bg-white/30'>
        <BlurView
          intensity={50}
          tint='light'
          className='flex items-center justify-center rounded-md px-4 pb-8'
        >
          <NumberInput />
          <View className='flex flex-row justify-center space-x-4'>
            <Button text='Start' />
            <View className='w-4' />
            <Button text='Confirm' />
          </View>
        </BlurView>
      </View>
    </View>
  );
}
