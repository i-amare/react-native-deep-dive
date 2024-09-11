import Meal from '@/models/meal';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

type DetailsCardProps = Meal;

export default function DetailsCard({
  title,
  ingredients,
  complexity,
  affordability,
  duration,
}: DetailsCardProps) {
  return (
    <View className='mx-auto h-40 w-11/12 -translate-y-20 rounded-2xl bg-gray-900 p-4'>
      <View className='mb-4'>
        <Text className='text-center text-3xl font-semibold text-white'>
          {title}
        </Text>
        <Text className='text-center text-gray-500'>
          {ingredients.length} ingredients
        </Text>
      </View>

      <View className='flex flex-row justify-evenly'>
        <Card
          icon={<Entypo name='bar-graph' size={18} color={'black'} />}
          text={complexity}
        />
        <Card
          icon={<Ionicons name='cash-outline' size={18} color={'black'} />}
          text={`${affordability}`}
        />
        <Card
          icon={<Ionicons name='time-outline' size={18} color={'black'} />}
          text={`${duration} min`}
        />
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
    <View className='flex w-1/3 items-center justify-center'>
      <View className='mb-2 rounded-md bg-amber-300 p-2'>{icon}</View>
      <Text className='font-semibold text-amber-300'>{text}</Text>
    </View>
  );
}
