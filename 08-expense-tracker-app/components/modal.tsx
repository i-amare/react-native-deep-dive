import NumericKeyboard from '@/components/ui/numericKeyboard';
import NumericTextBox from '@/components/ui/numericTextBox';
import { AccountContext } from '@/context/AccountContext';
import { useModalAnimation } from '@/hooks/AnimationHooks';
import { Transaction } from '@/types/Account';
import { formatStringNumber, parseNumber } from '@/utils/utils';
import { useContext, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import PageHeader from './ui/pageHeader';

interface ModalProps {
  setModalVisibility: (value: boolean) => void;
  modalState: 'Expense' | 'Income';
  modalAnimation: any;
  modalSwipeGesture: any;
}

export default function Modal({
  modalAnimation,
  setModalVisibility,
  modalState,
  modalSwipeGesture,
}: ModalProps) {
  const accountContext = useContext(AccountContext);

  const addTransaction = () => {
    const transaction: Transaction = {
      id: '',
      name: '',
      description: '',
      category: '',
      amount:
        modalState === 'Income' ? parseNumber(amount) : -parseNumber(amount),
      date: new Date(Date.now()),
    };
    setAmount('');
    accountContext.addTransaction(transaction);
  };

  const [amount, setAmount] = useState('');

  function onKeyPress(value: string) {
    setAmount((prev) => {
      const newAmount = (prev + value).replace(',', '.');
      if (Number.isNaN(Number(newAmount))) return prev;
      if (newAmount.includes('.')) {
        const [integer, decimal] = newAmount.split('.');
        if (decimal.length > 2) {
          return prev;
        }
      }
      return formatStringNumber(newAmount);
    });
  }

  function onBackSpace() {
    setAmount(amount.toString().slice(0, -1));
  }

  return (
    <GestureDetector gesture={modalSwipeGesture}>
      <Animated.View
        style={modalAnimation}
        className='absolute bottom-0 h-full w-full flex-1'
      >
        <Pressable
          className='h-8 w-full'
          onPressIn={() => setModalVisibility(false)}
        />
        <View className='flex-1 justify-between rounded-t-3xl bg-gray-950'>
          <PageHeader
            onClick={() => setModalVisibility(false)}
            title={modalState === 'Income' ? 'Add Income' : 'Add Expense'}
          />
          <NumericTextBox value={amount.toString()} />
          <View className='flex w-full items-center'>
            <Pressable
              onPressIn={() => {
                addTransaction();
                setModalVisibility(false);
              }}
              className='mb-4 flex h-12 w-[95%] items-center justify-center rounded-2xl bg-white'
            >
              <Text className='text-center text-xl font-semibold'>
                Continue
              </Text>
            </Pressable>
            <NumericKeyboard
              onBackSpace={onBackSpace}
              onKeyPress={onKeyPress}
            />
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}
