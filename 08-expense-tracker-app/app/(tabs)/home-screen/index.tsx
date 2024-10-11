import AccountCard from '@/components/home-screen/accountCard';
import AddExpenseModal from '@/components/home-screen/addExpenseModal';
import TransactionList from '@/components/home-screen/transactionList';
import { AccountContext } from '@/context/AccountContext';
import { ModalContext } from '@/context/ModalContext';
import { BlurView } from 'expo-blur';
import { useContext } from 'react';
import { Image, Modal, SafeAreaView, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const SCROLL_RATIO = 1.5;
const CARD_TRANSLATION = 75;
const MAX_SCROLL = 75;
const MIN_SCROLL = -125;

export default function HomeScreen() {
  const accountContext = useContext(AccountContext);
  const modalContext = useContext(ModalContext);

  const scrollContext = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scrollContext.value = translateY.value;
    })
    .onUpdate((e) => {
      const newTranslation = e.translationY + scrollContext.value;
      if (newTranslation > MIN_SCROLL && newTranslation < MAX_SCROLL)
        translateY.value = newTranslation;
      console.log(translateY.value);
    });

  const fastScroll = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const slowScroll = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value / SCROLL_RATIO + CARD_TRANSLATION },
    ],
  }));

  return (
    <SafeAreaView className='relative flex-1 items-center pt-14'>
      <Image
        source={require('@/assets/images/bg-image.jpg')}
        resizeMode='stretch'
        className='absolute left-0 top-0 h-screen w-full'
      />
      <Animated.View style={slowScroll} className='w-full'>
        <AccountCard balance={accountContext.balance} />
      </Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={fastScroll}
          className='h-screen w-full overflow-hidden rounded-3xl bg-white/5'
        >
          <BlurView className='h-full w-full' intensity={80}>
            <View className='mx-auto my-4 h-1 w-12 rounded-xl bg-white' />
            <Text className='px-4 text-2xl font-semibold text-white'>
              Transactions
            </Text>
            <TransactionList data={accountContext.transactionHistory} />
          </BlurView>
        </Animated.View>
      </GestureDetector>
      <Modal
        visible={modalContext.isVisible}
        onTouchEnd={() => modalContext.setIsVisible(false)}
        transparent={true}
      >
        <AddExpenseModal />
      </Modal>
    </SafeAreaView>
  );
}
