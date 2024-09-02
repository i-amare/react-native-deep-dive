import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Goal from './classes/Goal';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [text, setText] = useState('');

  function deleteGoal(itemID: String) {
    setGoals((prevGoalState) => {
      return prevGoalState.filter((goal) => {
        return goal.getID() !== itemID;
      });
    });
  }

  function onTextInputChange(text: string) {
    setText(text);
  }

  function addGoal() {
    setGoals((currentGoalState) => [...currentGoalState, new Goal(text)]);
    setText('');
  }

  function populateList() {
    setGoals((prevGoalState) => {
      const dummyGoals: Goal[] = [];
      for (let i = 0; i < 10; i++) {
        dummyGoals.push(new Goal(`Dummy goal ${prevGoalState.length + 1 + i}`));
      }
      return [...prevGoalState, ...dummyGoals];
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <KeyboardAvoidingView
        className='flex-1 items-center justify-between px-4 pb-12'
        enabled
        behavior='padding'
      >
        <Image
          className='absolute top-0'
          source={require('./assets/background-image.jpg')}
          resizeMode='repeat'
        />
        <SafeAreaView className='w-full flex-1 items-center justify-between'>
          <GoalList goals={goals} deleteGoal={deleteGoal} />
          <GoalInput
            addGoal={addGoal}
            onTextInputChange={onTextInputChange}
            text={text}
            populateList={populateList}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}
