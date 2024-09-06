import BlurContainer from '@/app/components/BlurContainer';
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
    <BlurContainer>
      <View className='flex w-full'>
        <Text className='w-full text-center font-vermin text-4xl'>
          Opponent's Guess
        </Text>
        <Text className='w-full text-center font-vermin text-8xl'>
          {`${guessedNumber.toString().padStart(2, '0')}`}
        </Text>
      </View>
      <View className='flex w-full flex-row justify-between'>
        <Button text='Lower' onPress={onLowerButtonPress} />
        <Button text='Higher' onPress={onHigherButtonPress} />
      </View>
    </BlurContainer>
  );
}
