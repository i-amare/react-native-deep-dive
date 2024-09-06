import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import ExitButton from './components/exitButton';
import GuessContainer from './components/guessContainer';
import GuessList from './components/guessList';

export default function GameScreen() {
  const { targetNumber } = useLocalSearchParams();
  const [guessedNumber, setGuessedNumber] = useState(-1);
  const [minGuess, setMinGuess] = useState(0);
  const [maxGuess, setMaxGuess] = useState(99);
  const [guesses, setGuesses] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    console.log({
      guessedNumber: guessedNumber,
      minGuess: minGuess,
      maxGuess: maxGuess,
      guesses: guesses,
    });
    setGuessedNumber(generateRandomBetween(minGuess, maxGuess));
  }, [guesses]);

  useEffect(() => {
    if (guessedNumber == Number(targetNumber)) {
      router.navigate({
        pathname: '/game-over',
        params: {
          numGuesses: guesses.length,
        },
      });
    }
  }, [guessedNumber]);

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
    <View className='flex-1 items-center justify-between'>
      <GuessContainer
        guessedNumber={guessedNumber}
        onLowerButtonPress={onLowerButtonPress}
        onHigherButtonPress={onHigherButtonPress}
      />
      <GuessList guesses={guesses} targetNumber={targetNumber} />
      <ExitButton />
    </View>
  );
}
