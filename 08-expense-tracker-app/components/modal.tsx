import NumericKeyboard from '@/components/ui/numericKeyboard';
import NumericTextBox from '@/components/ui/numericTextBox';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

interface ModalProps {
  modalState: 'Expense' | 'Income';
  toggleModal: () => void;
  modalAnimation: any;
}

export default function Modal({
  toggleModal,
  modalAnimation,
  modalState,
}: ModalProps) {
  const [text, setText] = useState('');

  function onKeyPress(value: string) {
    setText(text + value);
  }

  function onBackSpace() {
    setText(text.slice(0, -1));
  }

  return (
    <Animated.View
      style={modalAnimation}
      className='absolute bottom-0 h-full w-full flex-1'
    >
      <Pressable className='h-[12.5vh] w-full' onPressIn={toggleModal} />
      <View className='flex-1 justify-center rounded-t-3xl bg-gray-950'>
        <Text className='text-2xl text-white'>{modalState}</Text>
        <NumericTextBox value={text} />
        <NumericKeyboard onBackSpace={onBackSpace} onKeyPress={onKeyPress} />
      </View>
    </Animated.View>
  );
}
