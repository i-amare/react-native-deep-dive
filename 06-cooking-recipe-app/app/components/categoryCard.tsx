import Category from '@/models/category';
import { Text, View } from 'react-native';

type CategoryCardProps = Category;

export default function CategoryCard({ id, title, colour }: CategoryCardProps) {
  return (
    <View className='flex aspect-[4/5] flex-1 m-2 items-center justify-center rounded-xl bg-slate-800 p-4'>
      <Text className='w-full text-center text-lg font-semibold text-white'>
        {title}
      </Text>
    </View>
  );
}
