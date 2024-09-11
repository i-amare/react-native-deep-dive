import { MEALS } from '@/data/mealData';
import Meal from '@/models/meal';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

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
				className='w-full aspect-square'
      />
    </View>
  );
}
