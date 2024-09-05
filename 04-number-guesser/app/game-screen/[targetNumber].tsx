import { BlurView } from 'expo-blur';
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../components/button';

export default function GameScreen() {
  const { targetNumber } = useLocalSearchParams();
  const [guessedNumber, setGuessedNumber] = useState(-1);
  const [minGuess, setMinGuess] = useState(0);
  const [maxGuess, setMaxGuess] = useState(99);
  const [guesses, setGuesses] = useState<Number[]>([]);

  useEffect(() => {
    console.log({
      guessedNumber: guessedNumber,
      minGuess: minGuess,
      maxGuess: maxGuess,
      guesses: guesses,
    });
    setGuessedNumber(generateRandomBetween(minGuess, maxGuess));
  }, [guesses]);

  function generateRandomBetween(min: number, max: number) {
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if (randNum == guessedNumber) return generateRandomBetween(min, max);
    return randNum;
  }

  function onLowerButtonPress() {
    setMaxGuess(guessedNumber);
    setGuesses((prev) => [...prev, guessedNumber]);
  }

  function onHigherButtonPress() {
    setMinGuess(guessedNumber);
    setGuesses((prev) => [...prev, guessedNumber]);
  }

  return (
    <View className='flex-1'>
      <View className='mx-auto mt-12 overflow-hidden rounded-lg'>
        <BlurView
          intensity={65}
          tint='extraLight'
          className='flex items-center justify-center rounded-md px-4 py-6'
        >
          <View className='flex w-full'>
            <Text className='mb-4 w-full text-center text-4xl font-semibold'>
              Opponents Guess
            </Text>
            <Text className='w-full text-center text-6xl font-semibold'>
              {`${guessedNumber.toString().padStart(2, '0')}`}
            </Text>
          </View>
          <View className='flex w-full flex-row justify-center'>
            <Button text='Lower' onPress={onLowerButtonPress} />
            <View className='w-4' />
            <Button text='Higher' onPress={onHigherButtonPress} />
          </View>
        </BlurView>
      </View>
      <Link href='/'>Please Work! - {targetNumber} </Link>
    </View>
  );
}
