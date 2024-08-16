import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  function onTextInputChange(text: string) {
    setText(text);
  }

  return (
    <View className='flex-1 items-center justify-between bg-white pb-10 pt-14'>
      <Text className='mb-12'>{text}</Text>
      <View className='flex w-[90vw] flex-row content-center items-center gap-2 rounded-md bg-gray-800 px-2 py-1'>
        <TouchableOpacity className='-translate-y-[5.5px] px-2 py-1'>
          <Text className='m-auto text-3xl font-semibold text-white'>+</Text>
        </TouchableOpacity>
        <TextInput
          textAlign='left'
          textAlignVertical='center'
          className='h-full w-full -translate-y-[7px] py-2 text-lg font-semibold text-white'
          placeholder='Enter Your Course Goals!'
          placeholderTextColor={'lightgrey'}
          onChangeText={onTextInputChange}
        />
      </View>
    </View>
  );
}
