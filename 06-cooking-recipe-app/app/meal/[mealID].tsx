import { MEALS } from '@/data/mealData';
import Meal from '@/models/meal';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import CookingSteps from './components/cookingSteps';
import DetailsCard from './components/detailsCard';
import Ingredients from './components/ingredientsList';
import { FavouriteMealsContext } from '../context/FavouriteMealsContext';

export default function ItemPage() {
  const { mealID } = useLocalSearchParams();
  const [meal, setMeal] = useState<Meal>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      //@ts-ignore
      header: () => <Header mealID={mealID} />,
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

type HeaderProps = {
  mealID: string;
};
function Header({ mealID }: HeaderProps) {
  const router = useRouter();
  const FavouriteMeals = useContext(FavouriteMealsContext);

  function onBackButtonPress() {
    router.back();
  }

  function onSaveButtonPress() {
    if (FavouriteMeals.isFavourite(mealID))
      FavouriteMeals.removeFavouriteMeal(mealID);
    else FavouriteMeals.addFavouriteMeal(mealID);
  }

  type IconWrapperProps = {
    icon: React.ReactNode;
    onPress: () => void;
  };

  function IconWrapper({ icon, onPress }: IconWrapperProps) {
    return (
      <TouchableOpacity
        onPress={onPress}
        className='flex aspect-square w-10 items-center justify-center rounded-full bg-gray-700'
      >
        {icon}
      </TouchableOpacity>
    );
  }

  return (
    <View className='flex h-12 w-full flex-row items-center justify-between p-4'>
      <IconWrapper
        icon={<FontAwesome6 name='chevron-left' size={18} color={'white'} />}
        onPress={onBackButtonPress}
      />
      <IconWrapper
        icon={
          FavouriteMeals.isFavourite(mealID) ? (
            <AntDesign name='heart' color={'red'} size={18} />
          ) : (
            <AntDesign name='hearto' color={'white'} size={18} />
          )
        }
        onPress={onSaveButtonPress}
      />
    </View>
  );
}
