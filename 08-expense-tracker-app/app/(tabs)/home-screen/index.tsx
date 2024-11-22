import AccountCard from '@/components/accountCard';
import Modal from '@/components/modal';
import TransactionPanel from '@/components/transactionPanel';
import { AccountContext } from '@/context/AccountContext';
import { useModalAnimation, useScrollAnimation } from '@/hooks/AnimationHooks';
import { useContext } from 'react';
import { Image, SafeAreaView } from 'react-native';
import Animated from 'react-native-reanimated';

export default function HomeScreen() {
  const { balance, transactionHistory } = useContext(AccountContext);
  const { panGesture, fastScroll, slowScroll } = useScrollAnimation();
  const { toggleModal, modalAnimation, setModalVisibility } =
    useModalAnimation();

  return (
    <SafeAreaView className='relative flex-1 items-center pt-14'>
      <Image
        source={require('@/assets/images/bg-image.jpg')}
        resizeMode='stretch'
        className='absolute left-0 top-0 h-screen w-full'
      />
      <Animated.View style={slowScroll} className='w-full'>
        <AccountCard
          setModalVisibility={setModalVisibility}
          balance={balance}
        />
      </Animated.View>
      <TransactionPanel
        fastScroll={fastScroll}
        panGesture={panGesture}
        transactions={transactionHistory}
      />
      <Animated.View
        style={modalAnimation}
        className='absolute bottom-0 h-full w-full'
      >
        <Modal toggleModal={toggleModal} />
      </Animated.View>
    </SafeAreaView>
  );
}
