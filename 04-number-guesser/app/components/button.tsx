import { Keyboard, Text, TouchableHighlight } from 'react-native';

type buttonProps = {
  text: string;
};

export default function Button({ text }: buttonProps) {
  return (
    <TouchableHighlight
      className='rounded-md bg-slate-800 px-12 py-4'
      underlayColor='cornflowerblue'
      onPress={() => Keyboard.dismiss()}
    >
      <Text className='text-lg font-bold text-white'>{text}</Text>
    </TouchableHighlight>
  );
}
