import { MEALS } from '@/data/mealData';
import Meal from '@/models/meal';
import { createContext, useState } from 'react';

type FavouriteMealsContextType = {
  favouriteMeals: Meal[];
  addFavourite: (mealID: string) => void;
  removeFavourite: (mealID: string) => void;
};

export const FavouriteMealsContext = createContext<FavouriteMealsContextType>({
  favouriteMeals: [],
  addFavourite: (mealID: string) => {},
  removeFavourite: (mealID: string) => {},
});

export function FavouriteMealsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favouriteMeals, setFavouriteMeals] = useState<Meal[]>([]);

  function addFavourite(mealID: string) {
    setFavouriteMeals((prev: Meal[]) => {
      const meal = MEALS.find((val) => val.id === mealID);
      return meal === undefined ? prev : [...prev, meal];
    });
  }

  function removeFavourite(mealID: string) {
    setFavouriteMeals((prev) => prev.filter((value) => value.id !== mealID));
  }

  return (
    <FavouriteMealsContext.Provider
      value={{ favouriteMeals, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteMealsContext.Provider>
  );
}
