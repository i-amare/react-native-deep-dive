import { FlatList, Text, View } from 'react-native';
import { CATEGORIES as mealCatagories } from '@/data/mealData';
import CategoryCard from './components/categoryCard';

export default function HomePage() {
  return (
    <View className='flex-1 items-center justify-center'>
        <FlatList
          data={mealCatagories}
          numColumns={2}
          renderItem={({ item }) => <CategoryCard {...item} />}
          className='w-full'
        />
    </View>
  );
}
