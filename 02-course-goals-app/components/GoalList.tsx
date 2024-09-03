import { FlatList, Text, TouchableHighlight } from 'react-native';
import Goal from '../classes/Goal';

type GoalListProps = {
  goals: Goal[];
  deleteGoal: (itemID: string) => void;
};

export default function GoalList({ goals, deleteGoal }: GoalListProps) {
  return (
    <FlatList
      className='w-full'
      data={goals}
      keyExtractor={(item) => item.getID()}
      renderItem={({ item }) => (
        <TouchableHighlight
          underlayColor='crimson'
          className='my-1 w-full rounded-md bg-slate-800 px-3 py-4'
          onPress={() => deleteGoal(item.getID())}
        >
          <Text className='font-semibold text-white'>{item.getText()}</Text>
        </TouchableHighlight>
      )}
    />
  );
}
