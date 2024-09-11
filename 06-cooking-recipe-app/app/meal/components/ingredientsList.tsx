import { Text, View } from "react-native";

type IngredientsProps = {
  ingredients: string[];
};

export default function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <View className='mx-auto mb-6 w-11/12'>
      <Text className='text-lg font-semibold mb-2 text-white'>Ingredients</Text>
      <View className='flex flex-row flex-wrap'>
        {ingredients.map((val, index) => (
          <Text className='w-1/2 font-semibold text-gray-400'>{val}</Text>
        ))}
      </View>
    </View>
  );
}