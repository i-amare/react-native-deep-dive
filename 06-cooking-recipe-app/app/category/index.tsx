import { MEALS } from '@/data/mealData';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import MealCard from './components/mealCard';
import { useEffect } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Category() {
  const { categoryId, categoryTitle } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();

  function onMealCardClick(mealID: string) {
    router.navigate({
      pathname: '/meal/[mealID]',
      params: {
        mealID: mealID,
      },
    });
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      //@ts-ignore
      header: () => <Header title={categoryTitle} />,
    });
  }, [navigation]);

  return (
    <View className='h-full bg-gray-950'>
      <FlatList
        data={MEALS.filter(({ categoryID }) => {
          for (const category of categoryID) {
            if (category == categoryId) return true;
          }
          return false;
        })}
        renderItem={({ item }) => (
          <MealCard {...item} onPress={onMealCardClick} />
        )}
        className='w-full p-2'
      />
    </View>
  );
}

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const router = useRouter();

  const onBackButtonPress = () => router.back();

  return (
    <View className='relative flex h-12 flex-row items-center bg-slate-950 px-4'>
      <TouchableOpacity
        onPress={onBackButtonPress}
        className='absolute inset-0 flex aspect-square w-12 items-center justify-center rounded-full bg-gray-900'
      >
        <FontAwesome6 name='chevron-left' size={18} color={'white'} />
      </TouchableOpacity>
      <Text className='m-auto text-center text-xl font-semibold text-white'>
        {title}
      </Text>
    </View>
  );
}
