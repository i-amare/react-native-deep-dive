import { FlatList, Text, View } from 'react-native';

type CookingStepsProps = {
  cookingSteps: string[];
};

export default function CookingSteps({ cookingSteps }: CookingStepsProps) {
  return (
    <View className='flex-1'>
      <FlatList
        data={cookingSteps}
        renderItem={({ item, index }) => (
          <CookingStep index={index} cookingStep={item} />
        )}
      />
    </View>
  );
}

type CookingStepProps = {
  cookingStep: string;
  index: number;
};

function CookingStep({ cookingStep, index }: CookingStepProps) {
  return (
    <View className='mx-auto mb-4 w-11/12'>
      <Text className='text-lg font-semibold text-white'>Step {index + 1}</Text>
      <Text className='text-gray-400'>{cookingStep}</Text>
    </View>
  );
}
