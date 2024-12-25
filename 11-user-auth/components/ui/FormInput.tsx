import { Text, TextInput, View } from 'react-native';

interface FormInput {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function FormInput({
  title,
  placeholder,
  value,
  onChangeText,
}: FormInput) {
  return (
    <View>
      <Text className='mb-1 font-hurmit text-lg text-gray-300'>{title}</Text>
      <TextInput
        className='mb-4 h-14 rounded-lg bg-white p-2 font-hurmit text-lg text-black'
        placeholder={placeholder}
        placeholderTextColor='#aaa'
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
