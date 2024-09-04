import { TextInput, View } from 'react-native';

export default function NumberInput() {
  return (
    <View className='mb-4 flex w-full items-center justify-center'>
      <TextInput
        maxLength={2}
        keyboardType='number-pad'
        className='h-24 w-24 translate-y-8 overflow-visible text-center text-6xl font-semibold text-slate-800'
      />
      <View className='h-1 w-24 rounded-md bg-slate-800' />
    </View>
  );
}
