import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Goal from './classes/Goal';

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [text, setText] = useState('');

  function onTextInputChange(text: string) {
    setText(text);
  }

  function addGoal() {
    setGoals((currentGoalState) => [...currentGoalState, new Goal(text)]);
    setText('');
  }

  return (
    <View className='flex-1 items-center justify-between bg-white pb-10 pt-14'>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.getID()}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor='crimson'
            className='my-1 w-[90vw] rounded-md bg-slate-600 p-3'
            onPress={() => 0}
          >
            <Text className='font-semibold text-white'>{item.getText()}</Text>
          </TouchableHighlight>
        )}
      />
      <View className='flex w-[90vw] flex-row content-center items-center gap-2 rounded-md bg-gray-800 px-2 py-1'>
        <TouchableOpacity
          onPress={addGoal}
          className='-translate-y-[5.5px] px-2 py-1'
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
    </View>
  );
}
