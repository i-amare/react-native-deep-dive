import { MEALS } from '@/data/mealData';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import MealCard from './components/mealCard';

export default function Category() {
  const { categoryId } = useLocalSearchParams();

  return (
    <View className='bg-gray-950 h-full'>
      <FlatList
        data={MEALS.filter(({ categoryID }) => {
          for (const category of categoryID) {
            if (category == categoryId) return true;
          }
          return false;
        })}
        renderItem={({ item }) => <MealCard {...item} />}
        className='w-full p-2'
      />
    </View>
  );
}
