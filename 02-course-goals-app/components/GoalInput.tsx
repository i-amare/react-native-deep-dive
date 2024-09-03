import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type GoalInputProps=  {
  addGoal: () => void;
  onTextInputChange: (text: string) => void;
  populateList: () => void;
  text: string;
}

export default function GoalInput({
  addGoal,
  onTextInputChange,
  text,
  populateList,
}: GoalInputProps) {
  return (
    <View className='mb-2 flex w-full flex-row content-center items-center gap-2 rounded-md bg-gray-800 py-1'>
      <TouchableOpacity
        onPress={addGoal}
        className='-translate-y-[5.5px] px-2 py-1'
        onLongPress={populateList}
      >
        <Text className='m-auto text-3xl font-semibold text-white'>+</Text>
      </TouchableOpacity>
      <TextInput
        textAlign='left'
        textAlignVertical='center'
        className='h-full w-full -translate-y-[7px] py-2 text-lg font-semibold text-white'
        placeholder='Enter Your Course Goals!'
        placeholderTextColor={'lightgrey'}
        onChangeText={onTextInputChange}
        onSubmitEditing={addGoal}
        value={text}
      />
    </View>
  );
}
