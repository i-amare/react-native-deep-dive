import Meal from '@/models/meal';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

type MealCardProps = Meal;

export default function MealCard(meal: MealCardProps) {
  return (
    <View className='my-2 flex w-full flex-row items-center rounded-xl overflow-hidden bg-gray-900'>
      <Image
        className='aspect-square w-28 rounded-xl mr-8'
        source={{
          uri: meal.imageUrl,
        }}
      />
      <View className='flex'>
        <Text className='text-xl font-semibold text-white w-2/3 mb-2'>{meal.title}</Text>
        <View className='flex flex-row'>
          <Card
            icon={<Entypo name='bar-graph' size={18} color={'black'} />}
            text={meal.complexity}
          />
          <View className='mx-3'></View>
          <Card
            icon={<Ionicons name='time-outline' size={18} color={'black'} />}
            text={`${meal.duration} min`}
          />
        </View>
      </View>
    </View>
  );
}

type CardProps = {
  icon: React.ReactNode;
  text: string;
};

function Card({ icon, text }: CardProps) {
  return (
    <View className='flex flex-row items-center'>
      <View className='mr-2 rounded-md bg-amber-300 p-1'>{icon}</View>
      <Text className='font-semibold text-amber-300'>{text}</Text>
    </View>
  );
}
