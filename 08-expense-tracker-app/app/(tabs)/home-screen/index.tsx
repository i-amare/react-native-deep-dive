import AccountCard from '@/components/accountCard';
import Modal from '@/components/modal';
import TransactionPanel from '@/components/transactionPanel';
import { AccountContext } from '@/context/AccountContext';
import { NavigationContext } from '@/context/NavigationContext';
import { useModalAnimation, useScrollAnimation } from '@/hooks/AnimationHooks';
import { useContext, useState } from 'react';
import { Image, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  const [modalState, setModalState] = useState<'Expense' | 'Income'>('Expense');
  const { balance, transactionHistory } = useContext(AccountContext);
  const { setIsVisible } = useContext(NavigationContext);

  const { panGesture, fastScroll, slowScroll } = useScrollAnimation();
  const {
    toggleModal,
    modalAnimation,
    setModalVisibility: sMV,
  } = useModalAnimation();

  const setModalVisibility = (value: boolean) => {
    sMV(value);
    setIsVisible(!value);
  };

  return (
    <SafeAreaView className='relative flex-1 items-center pt-14'>
      <Image
        source={require('@/assets/images/bg-image.jpg')}
        resizeMode='stretch'
        className='absolute left-0 top-0 h-screen w-full'
      />
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
      <Modal
        setModalVisibility={setModalVisibility}
        modalState={modalState}
        modalAnimation={modalAnimation}
      />
    </SafeAreaView>
  );
}
