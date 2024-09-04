import { BlurView } from 'expo-blur';
import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import Button from './components/button';
import NumberInput from './components/numberInput';

export default function HomePage() {
  const [enteredNumber, setEnteredNumber] = useState('00');

  function onKeyPress(e: NativeSyntheticEvent<TextInputKeyPressEventData>) {
    const key = e.nativeEvent.key;
    let num: number;

    const acceptedCharacters = '0123456789';
    if (key == 'Backspace') num = Number(enteredNumber[0]);
    if (acceptedCharacters.indexOf(key) !== -1) num = Number(enteredNumber + key);

    setEnteredNumber(() => {
      if (num > 99) return num.toString().slice(0, 2);
      if (num < 10) return '0' + num.toString();
      else return num.toString();
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
