import AccountCard from '@/components/accountCard';
import Modal from '@/components/modal';
import TransactionPanel from '@/components/transactionPanel';
import { AccountContext } from '@/context/AccountContext';
import { NavigationContext } from '@/context/NavigationContext';
import { useModalAnimation, useScrollAnimation } from '@/hooks/AnimationHooks';
import { useContext, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

export default function HomeScreen() {
  const [modalState, setModalState] = useState<'Expense' | 'Income'>('Expense');
  const { balance, transactionHistory } = useContext(AccountContext);
  const { setIsVisible } = useContext(NavigationContext);

  const { panGesture, fastScroll, slowScroll } = useScrollAnimation();
  const {
    modalAnimation,
    setModalVisibility: setModalVisibilityWithAnimation,
    modalSwipeGesture,
  } = useModalAnimation();

  const setModalVisibility = (value: boolean) => {
    setModalVisibilityWithAnimation(value);
    setIsVisible(!value);
  };

  return (
    <SafeAreaView className='relative flex-1'>
      <Image
        source={require('@/assets/images/bg-image.jpg')}
        resizeMode='stretch'
        className='absolute left-0 top-0 h-screen w-full'
      />
      <Text className='m-4 mb-0 text-3xl font-bold text-white'>
        Account Dashboard
      </Text>
      <View className='-translate-y-8'>
        <AccountCard
          setModalState={setModalState}
          slowScroll={slowScroll}
          setModalVisibility={setModalVisibility}
          balance={balance}
        />
        <TransactionPanel
          fastScroll={fastScroll}
          panGesture={panGesture}
          transactions={transactionHistory}
        />
      </View>
      <Modal
        modalSwipeGesture={modalSwipeGesture}
        setModalVisibility={setModalVisibility}
        modalState={modalState}
        modalAnimation={modalAnimation}
      />
    </SafeAreaView>
  );
}
