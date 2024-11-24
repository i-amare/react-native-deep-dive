import NumericKeyboard from '@/components/ui/numericKeyboard';
import NumericTextBox from '@/components/ui/numericTextBox';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';
import PageHeader from './ui/pageHeader';

interface ModalProps {
  setModalVisibility: (value: boolean) => void;
  modalState: 'Expense' | 'Income';
  modalAnimation: any;
}

export default function Modal({
  modalAnimation,
  setModalVisibility,
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
      <Pressable
        className='h-[10vh] max-h-16 w-full'
        onPressIn={() => setModalVisibility(false)}
      />
      <View className='flex-1 justify-between rounded-t-3xl bg-gray-950'>
        <PageHeader
          onClick={() => setModalVisibility(false)}
          title={modalState === 'Income' ? 'Add Income' : 'Add Expense'}
        />
        <NumericTextBox value={text} />
        <NumericKeyboard onBackSpace={onBackSpace} onKeyPress={onKeyPress} />
      </View>
    </Animated.View>
  );
}
