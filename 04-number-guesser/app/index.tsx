import { BlurView } from 'expo-blur';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Keyboard,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import Button from './components/button';
import NumberInput from './components/numberInput';
import BlurContainer from './components/BlurContainer';

export default function HomePage() {
  const [targetNumber, setEnteredNumber] = useState('00');
  const router = useRouter();

  function onKeyPress(e: NativeSyntheticEvent<TextInputKeyPressEventData>) {
    const key = e.nativeEvent.key;
    let num: number = 0;

    const acceptedCharacters = '0123456789';
    if (key == 'Backspace') {
      num = Number(targetNumber[0]);
      setEnteredNumber(num.toString().slice(0, 2).padStart(2, '0'));
    } else if (acceptedCharacters.indexOf(key) !== -1) {
      num = Number(targetNumber + key);
      setEnteredNumber(num.toString().slice(0, 2).padStart(2, '0'));
    }
  }

  function onResetButtonPress() {
    Keyboard.dismiss();
    setEnteredNumber('00');
  }

  function onStartButtonPress() {
    const num = Number(targetNumber);
    if (num <= 0 || num >= 100) {
      Alert.alert('Invalid Number', 'Number must be between 0 and 100.', [
        {
          text: 'Ok',
          style: 'destructive',
          onPress: () => setEnteredNumber('00'),
        },
      ]);
    } else {
      Keyboard.dismiss();
      router.navigate({
        pathname: '/game-screen',
        params: { targetNumber: Number(targetNumber) },
      });
    }
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <BlurContainer>
        <NumberInput text={targetNumber} onKeyPress={onKeyPress} />
        <View className='mb-8 flex w-full flex-row justify-between'>
          <Button text='Start' onPress={onStartButtonPress} />
          <Button text='Reset' onPress={onResetButtonPress} />
        </View>
      </BlurContainer>
    </View>
  );
}
