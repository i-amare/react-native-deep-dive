import { CATEGORIES as mealCatagories } from '@/data/mealData';
import { FlatList, View } from 'react-native';
import CategoryCard from './components/categoryCard';

export default function HomePage() {
  return (
    <View className='flex-1 items-center justify-center bg-gray-950'>
      <FlatList
        data={mealCatagories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <CategoryCard {...item} />}
        className='w-full'
      />
    </View>
  );
}
