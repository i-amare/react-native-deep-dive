import { ModalContext } from '@/context/ModalContext';
import { BlurView } from 'expo-blur';
import { useContext } from 'react';
import { View } from 'react-native';

export default function AddExpenseModal() {
  const modalContext = useContext(ModalContext);

  return (
    <View className='flex-1 bg-black/50'>
      <BlurView
        intensity={20}
        className='flex-1'
        onTouchEnd={() => modalContext.setIsVisible(false)}
      ></BlurView>
    </View>
  );
}
