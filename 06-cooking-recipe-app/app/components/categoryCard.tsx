import Category from '@/models/category';
import { Image, Text, View } from 'react-native';

type CategoryCardProps = Category;

export default function CategoryCard({
  id,
  title,
  imageUrl,
}: CategoryCardProps) {
  return (
    <View className='relative mx-2 mt-14 flex aspect-[4/5] flex-1 items-center justify-center rounded-3xl bg-gray-900 p-4'>
      <View className='absolute top-0 aspect-square w-28 -translate-y-6 overflow-hidden rounded-full bg-white'>
        <Image
          source={{
            uri: imageUrl,
          }}
          className='w-dull h-full'
        />
      </View>
      <Text className='w-full text-center text-lg font-semibold text-white'>
        {title}
      </Text>
    </View>
  );
}
