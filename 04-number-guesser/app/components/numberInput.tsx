import {
  NativeSyntheticEvent,
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
      <TextInput
        keyboardType='number-pad'
        onKeyPress={onKeyPress}
        value={text}
        className='h-24 w-24 translate-y-8 overflow-visible text-center text-6xl font-semibold text-slate-800'
      />
      <View className='h-1 w-24 rounded-md bg-slate-800' />
    </View>
  );
}
