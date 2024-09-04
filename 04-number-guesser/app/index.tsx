import { BlurView } from 'expo-blur';
import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import Button from './components/button';
import NumberInput from './components/textInput';

export default function HomePage() {
  const [enteredNumber, setEnteredNumber] = useState('0');

  function onKeyPress(e: NativeSyntheticEvent<TextInputKeyPressEventData>) {
    const key = e.nativeEvent.key;

    if (key == 'Backspace') {
      setEnteredNumber((prev) => prev[prev.length - 2] || '0');
      return;
    }

    const acceptedCharacters = '0123456789';
    if (acceptedCharacters.indexOf(key) == -1) return;
    if (enteredNumber.length >= 2) return;

    setEnteredNumber((prev) => {
      return Number(prev + key).toString();
    });
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <View className='overflow-hidden rounded-xl bg-white/30'>
        <BlurView
          intensity={50}
          tint='light'
          className='flex items-center justify-center rounded-md px-4 pb-8'
        >
          <NumberInput text={enteredNumber} onKeyPress={onKeyPress} />
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
