import NumericKeyboard from '@/components/ui/numericKeyboard';
import NumericTextBox from '@/components/ui/numericTextBox';
import { AccountContext } from '@/context/AccountContext';
import { Transaction } from '@/types/Account';
import { useContext, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
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
  const accountContext = useContext(AccountContext);

  const addTransaction = () => {
    const transaction: Transaction = {
      id: '',
      name: '',
      description: '',
      category: '',
      amount: modalState === 'Income' ? parseFloat(text) : -parseFloat(text),
      date: new Date(Date.now()),
    };
    setText('');
    accountContext.addTransaction(transaction);
  };

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
        <View className='flex w-full items-center'>
          <Pressable
            onPressIn={() => {
              addTransaction();
              setModalVisibility(false);
            }}
            className='mb-4 flex h-12 w-[95%] items-center justify-center rounded-2xl bg-white'
          >
            <Text className='text-center text-xl font-semibold'>Continue</Text>
          </Pressable>
          <NumericKeyboard onBackSpace={onBackSpace} onKeyPress={onKeyPress} />
        </View>
      </View>
    </Animated.View>
  );
}
