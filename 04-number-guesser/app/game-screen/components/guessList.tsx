import BlurContainer from '@/app/components/BlurContainer';
import { FlatList, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type GuessListProps = {
  guesses: number[];
  targetNumber: number;
};

export default function GuessList({ guesses, targetNumber }: GuessListProps) {
  return (
    <BlurContainer>
      <FlatList
        className='w-full'
        data={guesses}
        renderItem={({ item }) => (
          <Guess guess={item} targetNumber={targetNumber} />
        )}
        keyExtractor={(item, index) => `${index}-${item}`}
      />
    </BlurContainer>
  );
}

type GuessProps = {
  guess: number;
  targetNumber: number;
};

function Guess({ guess, targetNumber }: GuessProps) {
  return (
    <View className='mx-auto my-1 w-full flex-row justify-between rounded-md bg-slate-800 px-6 py-2'>
      <Text className='font-vermin text-3xl text-white'>Guess:</Text>
      <View className='flex flex-row items-center'>
        <Text
          className={`font-vermin text-3xl ${guess < targetNumber ? 'text-green-400' : 'text-red-400'}`}
        >
          {guess.toString().padStart(2, '0')}{' '}
        </Text>
        {guess < targetNumber ? (
          <AntDesign name='caretup' size={16} color={'rgb(74,222,128)'} />
        ) : (
          <AntDesign name='caretdown' size={16} color={'rgb(248,113,113)'} />
        )}
      </View>
    </View>
  );
}
