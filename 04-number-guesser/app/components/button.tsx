import { Keyboard, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

type buttonProps = {
  text: string;
  onPress?: () => void
};

export default function Button({ text, onPress }: buttonProps) {
  return (
    <TouchableOpacity
      className='rounded-md bg-slate-800 px-12 py-3'
      activeOpacity={0.6}
      // underlayColor='cornflowerblue'
      onPress={onPress}
    >
      <Text className='text-2xl font-vermin text-white'>{text}</Text>
    </TouchableOpacity>
  );
}
