import NumericKeyboard from '@/components/ui/numericKeyboard';
import NumericTextBox from '@/components/ui/numericTextBox';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

interface ModalProps {
  toggleModal: () => void;
}

export default function Modal({ toggleModal }: ModalProps) {
  const [text, setText] = useState('');

  function onKeyPress(value: string) {
    setText(text + value);
  }

  function onBackSpace() {
    setText(text.slice(0, -1));
  }

  return (
    <View className='flex-1'>
      <Pressable className='h-[12.5vh] w-full' onPressIn={toggleModal} />
      <View className='flex-1 justify-center rounded-t-3xl bg-gray-950'>
        <NumericTextBox value={text} />
        <NumericKeyboard onBackSpace={onBackSpace} onKeyPress={onKeyPress} />
      </View>
    </View>
  );
}
