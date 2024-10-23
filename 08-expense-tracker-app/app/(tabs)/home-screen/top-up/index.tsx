import PageHeader from '@/components/ui/pageHeader';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function TopUpScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      header: () => <PageHeader title='Top Up' />,
    });
  }, []);

  return <View className='flex-1 bg-gray-950'></View>;
}
