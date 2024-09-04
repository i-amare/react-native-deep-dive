import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

type NumberInputProps = {
  text: string;
  onKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
};

export default function NumberInput({ text, onKeyPress }: NumberInputProps) {
  return (
    <View className='mb-4 flex w-full items-center justify-center'>
      <View className='relative h-24 w-24 translate-y-7'>
        <View className='flex h-24 w-24 items-center justify-center'>
          <Text className='text-center text-6xl font-semibold'>{text}</Text>
        </View>
        <TextInput
          keyboardType='number-pad'
          onKeyPress={onKeyPress}
          value={text}
          caretHidden
          className='absolute inset-0 h-24 w-24 text-transparent'
        />
      </View>
      <View className='h-1 w-24 rounded-md bg-slate-800' />
    </View>
  );
}
