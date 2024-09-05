import { BlurView } from 'expo-blur';
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function GameScreen() {
  const { targetNumber } = useLocalSearchParams();
  const [guessedNumber, setGuessedNumber] = useState(-1);
  const [minGuess, setMinGuess] = useState(0);
  const [maxGuess, setMaxGuess] = useState(99);

  useEffect(() => {
    setGuessedNumber(generateRandomBetween(minGuess, maxGuess));
  }, []);

  function generateRandomBetween(min: number, max: number) {
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    return randNum;
  }

  return (
    <View className='flex-1'>
      <View className='mx-auto w-10/12 overflow-hidden rounded-lg bg-white/30'>
        <BlurView intensity={35} tint='extraLight' className='py-8'>
          <View className='flex'>
            <Text className='w-full text-center text-4xl font-semibold mb-4'>
              Opponents Guess
            </Text>
            <Text className='w-full text-center text-6xl font-semibold'>
              {`${guessedNumber.toString().padStart(2, '0')}`}
            </Text>
          </View>
        </BlurView>
      </View>
      <Link href='/'>Please Work! - {targetNumber} </Link>
    </View>
  );
}
