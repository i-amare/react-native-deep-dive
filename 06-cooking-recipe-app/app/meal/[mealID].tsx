import { MEALS } from '@/data/mealData';
import Meal from '@/models/meal';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import DetailsCard from './components/detailsCard';

export default function ItemPage() {
  const { mealID } = useLocalSearchParams();
  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    setMeal(MEALS.find((value) => mealID === value.id));
  }, [mealID]);

  return meal === undefined ? null : (
    <View className='flex-1 bg-gray-950'>
      <Image
        source={{
          uri: meal.imageUrl,
        }}
        className='aspect-[1.15] w-full rounded-b-3xl'
      />
      <DetailsCard {...meal} />

    </View>
  );
}
