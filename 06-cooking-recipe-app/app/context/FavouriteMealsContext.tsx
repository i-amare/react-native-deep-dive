import { MEALS } from '@/data/mealData';
import Meal from '@/models/meal';
import { createContext, useState } from 'react';

type FavouriteMealsContextType = {
  favouriteMeals: Meal[];
  addFavouriteMeal: (mealID: string) => void;
  removeFavouriteMeal: (mealID: string) => void;
  isFavourite: (mealID: string) => boolean;
};

export const FavouriteMealsContext = createContext<FavouriteMealsContextType>({
  favouriteMeals: [],
  addFavouriteMeal: (mealID: string) => {},
  removeFavouriteMeal: (mealID: string) => {},
  isFavourite: (mealID: string) => false,
});

export function FavouriteMealsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favouriteMeals, setFavouriteMeals] = useState<Meal[]>([]);

  function addFavouriteMeal(mealID: string) {
    const meal = MEALS.find((val) => val.id === mealID);
    if (meal !== undefined) setFavouriteMeals((prev) => [...prev, meal]);
  }

  function removeFavouriteMeal(mealID: string) {
    setFavouriteMeals((prev) => prev.filter((val) => val.id !== mealID));
  }

  function isFavourite(mealID: string) {
    for (const meal of favouriteMeals) {
      if (mealID === meal.id) return true;
    }
    return false;
  }

  return (
    <FavouriteMealsContext.Provider
      value={{
        favouriteMeals,
        isFavourite,
        addFavouriteMeal,
        removeFavouriteMeal,
      }}
    >
      {children}
    </FavouriteMealsContext.Provider>
  );
}
