import { BlurView } from 'expo-blur';
import { View } from 'react-native';

type BlurContainerProps = {
  paddingX?: number;
  paddingY?: number;
  intensity?: number;
  children?: React.ReactNode;
};

export default function BlurContainer({
  paddingX = 4,
  paddingY = 4,
  intensity = 65,
  children,
}: BlurContainerProps) {
  return (
    <View className='w-11/12 overflow-hidden rounded-xl'>
      <BlurView
        intensity={intensity}
        tint='extraLight'
        className={`flex w-full items-center justify-center rounded-xl px-${paddingX} py-${paddingY}`}
      >
        {children}
      </BlurView>
    </View>
  );
}
