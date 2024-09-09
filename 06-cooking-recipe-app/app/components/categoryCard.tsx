import Category from '@/models/category';
import { Image, ImageBackground, Text, View } from 'react-native';

type CategoryCardProps = Category;

export default function CategoryCard({ id, title, colour }: CategoryCardProps) {
  return (
    <View className='relative mx-2 mt-14 flex aspect-[4/5] flex-1 items-center justify-center rounded-3xl bg-slate-900 p-4'>
      <View className='absolute top-0 aspect-square w-28 -translate-y-6 rounded-full bg-white overflow-hidden'>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
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
