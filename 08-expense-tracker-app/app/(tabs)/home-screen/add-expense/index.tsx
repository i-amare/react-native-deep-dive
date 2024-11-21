import NumericKeyboard from '@/components/ui/numericKeyboard';
import PageHeader from '@/components/ui/pageHeader';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function AddExpenseScreen() {
  const navigation = useNavigation();

  const [text, setText] = useState('');

  function onKeyPress(value: string) {
    setText(text + value);
  }

  function onBackSpace() {
    setText(text.slice(0, -1));
  }

  useEffect(() => {
    navigation.setOptions({
      header: () => <PageHeader title='Add Expense' />,
    });
  }, []);

  return (
    <View className='flex-1 bg-gray-950'>
      <NumericKeyboard onBackSpace={onBackSpace} onKeyPress={onKeyPress} />
    </View>
  );
}
