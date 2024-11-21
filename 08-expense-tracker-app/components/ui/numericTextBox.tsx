import { Text, View } from 'react-native';

interface NumericTextBoxProps {
  value: string;
}

export default function NumericTextBox({ value }: NumericTextBoxProps) {
  return (
    <View className='mt-14 flex flex-row items-end px-6'>
      {value === '' ? (
        <Text className='text-8xl text-gray-400'>0</Text>
      ) : (
        <Text className='text-8xl text-white'>{value}</Text>
      )}
      <Text className='text-4xl font-semibold text-gray-600'>ZAR</Text>
    </View>
  );
}
