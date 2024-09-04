import { TextInput, View } from 'react-native';

export default function NumberInput() {
  return (
    <View className='mb-4 flex w-full items-center justify-center'>
      <TextInput
        maxLength={2}
        keyboardType='number-pad'
        className='h-24 translate-y-8 overflow-visible text-6xl font-semibold'
      />
      <View className='h-1 w-24 rounded-md bg-black' />
    </View>
  );
}
