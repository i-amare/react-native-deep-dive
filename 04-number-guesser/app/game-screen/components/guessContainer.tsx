import Button from '@/app/components/button';
import { BlurView } from 'expo-blur';
import { Text, View } from 'react-native';

type GuessContainerProps = {
  guessedNumber: number;
  onLowerButtonPress: () => void;
  onHigherButtonPress: () => void;
};

export default function GuessContainer({
  guessedNumber,
  onLowerButtonPress,
  onHigherButtonPress,
}: GuessContainerProps) {
  return (
    <View className='mx-auto overflow-hidden rounded-xl w-11/12'>
      <BlurView
        intensity={65}
        tint='extraLight'
        className='flex items-center justify-center rounded-xl px-4 py-6 w-full'
      >
        <View className='flex w-full'>
          <Text className='w-full text-center text-4xl font-vermin'>
            Opponent's Guess
          </Text>
          <Text className='w-full text-center text-8xl font-vermin'>
            {`${guessedNumber.toString().padStart(2, '0')}`}
          </Text>
        </View>
        <View className='flex w-full flex-row justify-between'>
          <Button text='Lower' onPress={onLowerButtonPress} />
          <Button text='Higher' onPress={onHigherButtonPress} />
        </View>
      </BlurView>
    </View>
  );
}
