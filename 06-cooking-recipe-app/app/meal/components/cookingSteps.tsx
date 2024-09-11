import { FlatList, Text, View } from 'react-native';

type CookingStepsProps = {
  cookingSteps: string[];
};

export default function CookingSteps({ cookingSteps }: CookingStepsProps) {
  return (
    <View className='w-11/12 mx-auto'>
      <Text className='text-white font-semibold text-lg mb-2'>Cooking Steps</Text>
			{cookingSteps.map((cookingStep, index) => <CookingStep cookingStep={cookingStep} index={index} />)}
    </View>
  );
}

type CookingStepProps = {
  cookingStep: string;
  index: number;
};

function CookingStep({ cookingStep, index }: CookingStepProps) {
  return (
    <View className='mb-4'>
      <Text className='font-semibold text-white'>Step {index + 1}</Text>
      <Text className='text-gray-400'>{cookingStep}</Text>
    </View>
  );
}
