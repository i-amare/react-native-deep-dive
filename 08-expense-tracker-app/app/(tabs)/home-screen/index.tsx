import AccountCard from '@/components/accountCard';
import TransactionList from '@/components/transactionList';
import { AccountContext } from '@/context/AccountContext';
import { BlurView } from 'expo-blur';
import { useContext, useState } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

// Constants
const CONSTANTS = {
  SCROLL_RATIO: 1.5,
  CARD_TRANSLATION: 75,
  MAX_SCROLL: 75,
  MIN_SCROLL: -125,
} as const;

// Custom hooks
const useScrollAnimation = () => {
  const scrollContext = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scrollContext.value = translateY.value;
    })
    .onUpdate((e) => {
      const newTranslation = e.translationY + scrollContext.value;
      if (
        newTranslation > CONSTANTS.MIN_SCROLL &&
        newTranslation < CONSTANTS.MAX_SCROLL
      ) {
        translateY.value = newTranslation;
      }
    });

  const fastScroll = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const slowScroll = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          translateY.value / CONSTANTS.SCROLL_RATIO +
          CONSTANTS.CARD_TRANSLATION,
      },
    ],
  }));

  return { panGesture, fastScroll, slowScroll };
};

const useModalAnimation = () => {
  const modalScrollContext = useSharedValue(100);

  const toggleModal = () => {
    modalScrollContext.value = modalScrollContext.value === 0 ? 100 : 0;
  };

  const modalAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(`${modalScrollContext.value}%`, {
          duration: 450,
          easing: Easing.inOut(Easing.ease),
        }),
      },
    ],
  }));

  return { toggleModal, modalAnimation };
};

// Components
const Background = () => (
  <Image
    source={require('@/assets/images/bg-image.jpg')}
    resizeMode='stretch'
    className='absolute left-0 top-0 h-screen w-full'
  />
);

const TransactionPanel = ({
  fastScroll,
  panGesture,
  transactions,
}: {
  fastScroll: any;
  panGesture: any;
  transactions: any[];
}) => (
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
        <TransactionList data={transactions} />
      </BlurView>
    </Animated.View>
  </GestureDetector>
);

// Main component
export default function HomeScreen() {
  const { balance, transactionHistory } = useContext(AccountContext);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const { panGesture, fastScroll, slowScroll } = useScrollAnimation();
  const { toggleModal, modalAnimation } = useModalAnimation();

  return (
    <SafeAreaView className='relative flex-1 items-center pt-14'>
      <Background />
      <Animated.View style={slowScroll} className='w-full'>
        <AccountCard balance={balance} />
      </Animated.View>
      <TransactionPanel
        fastScroll={fastScroll}
        panGesture={panGesture}
        transactions={transactionHistory}
      />
      <Animated.View
        style={modalAnimation}
        className='absolute bottom-0 h-[90vh] w-full rounded-t-3xl bg-white'
      />
      <Pressable
        onPress={toggleModal}
        className='absolute left-0 right-0 top-0 m-auto h-8 w-16 rounded-xl bg-red-400'
      />
    </SafeAreaView>
  );
}
