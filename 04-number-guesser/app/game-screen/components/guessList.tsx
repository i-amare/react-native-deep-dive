import BlurContainer from '@/app/components/BlurContainer';
import { FlatList, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';

type GuessListProps = {
  guesses: number[];
  targetNumber: number;
};

export default function GuessList({ guesses, targetNumber }: GuessListProps) {
  return (
    <View className='w-11/12 overflow-hidden rounded-xl'>
      <BlurView
        intensity={65}
        tint='extraLight'
        className='flex w-full items-center h-[55vh] justify-center rounded-xl px-4 py-4'
				>
				<Text className='font-vermin text-3xl'>Past Guesses</Text>
        <FlatList
          className='w-full'
          data={guesses}
          keyExtractor={(item, index) => `${index}-${item}`}
          renderItem={({ item, index }) => (
            <Guess guess={item} index={index} targetNumber={targetNumber} />
          )}
        />
      </BlurView>
    </View>
  );
}

type GuessProps = {
  guess: number;
  targetNumber: number;
  index: number;
};

function Guess({ guess, targetNumber, index }: GuessProps) {
  return (
    <View className='mx-auto my-1 w-full flex-row justify-between rounded-md bg-slate-800 px-6 py-2'>
      <Text className='font-vermin text-2xl text-white'>
        Guess #{index + 1}:
      </Text>
      <View className='flex flex-row items-center'>
        <Text
          className={`font-vermin text-2xl ${guess < targetNumber ? 'text-green-400' : 'text-red-400'}`}
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
