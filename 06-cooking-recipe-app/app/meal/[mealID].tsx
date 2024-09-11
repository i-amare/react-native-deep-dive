import { MEALS } from '@/data/mealData';
import Meal from '@/models/meal';
import { Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DetailsCard from './components/detailsCard';
import CookingSteps from './components/cookingSteps';
import Ingredients from './components/ingredientsList';

export default function ItemPage() {
  const { mealID } = useLocalSearchParams();
  const [meal, setMeal] = useState<Meal>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      //@ts-ignore
      header: () => <Header />,
    });
  }, [navigation]);

  useEffect(() => {
    setMeal(MEALS.find((value) => mealID === value.id));
  }, [mealID]);

  return meal === undefined ? null : (
    <ScrollView className='flex-1 bg-gray-950'>
      <Image
        source={{
          uri: meal.imageUrl,
        }}
        className='aspect-[1.15] w-full rounded-b-3xl'
      />
      <DetailsCard {...meal} />
      <View className='-translate-y-16'>
        <Ingredients ingredients={meal.ingredients} />
        <CookingSteps cookingSteps={meal.steps} />
      </View>
    </ScrollView>
  );
}

function Header() {
  const router = useRouter();

  const onBackButtonPress = () => router.back();

  return (
    <View className='relative flex h-12 flex-row items-center px-4'>
      <TouchableOpacity
        onPress={onBackButtonPress}
        className='absolute inset-0 ml-4 flex aspect-square w-10 items-center justify-center rounded-full bg-gray-700'
      >
        <FontAwesome6 name='chevron-left' size={18} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}
