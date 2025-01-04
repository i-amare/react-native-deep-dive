import { Text, TextInput, View } from "react-native";

interface FormInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function FormInput({
  label,
  value,
  placeholder,
  onChange,
}: FormInputProps) {
  return (
    <View className='my-2 w-full'>
      <Text className='mb-1 text-lg font-semibold text-white'>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#ccc'
        className='flex w-full items-center rounded-md bg-white px-2 py-3 text-lg text-black'
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}
