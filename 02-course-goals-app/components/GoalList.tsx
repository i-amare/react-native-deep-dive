import { FlatList, Text, TouchableHighlight } from 'react-native';
import Goal from '../classes/Goal';

export default function GoalList({
  goals,
  deleteGoal,
}: {
  goals: Goal[];
  deleteGoal: (itemID: String) => void;
}) {
  return (
    <FlatList
      className='w-full'
      data={goals}
      keyExtractor={(item) => item.getID()}
      renderItem={({ item }) => (
        <TouchableHighlight
          underlayColor='crimson'
          className='my-1 w-full rounded-md bg-slate-800 p-3'
          onPress={() => deleteGoal(item.getID())}
        >
          <Text className='font-semibold text-white'>{item.getText()}</Text>
        </TouchableHighlight>
      )}
    />
  );
}
