import Category from '@/models/category';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type CategoryCardProps = Category;

export default function CategoryCard({
  id,
  title,
  imageUrl,
}: CategoryCardProps) {
  const router = useRouter();

  function onPress() {
    router.navigate({
      pathname: '/category',
      params: {
        categoryId: id,
      },
    });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className='relative mx-2 mt-14 flex aspect-[3/3] flex-1 items-center justify-center rounded-3xl bg-gray-900 p-4'
    >
      <View className='absolute top-0 aspect-square w-28 -translate-y-6 overflow-hidden rounded-full bg-white'>
        <Image
          source={{
            uri: imageUrl,
          }}
          className='w-dull h-full'
        />
      </View>
      <Text className='w-full translate-y-8 text-center text-xl font-semibold text-white'>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
