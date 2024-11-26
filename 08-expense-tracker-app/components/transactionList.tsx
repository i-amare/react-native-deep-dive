import { AccountContext } from '@/context/AccountContext';
import { Transaction } from '@/types/Account';
import { FontAwesome } from '@expo/vector-icons';
import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type TransactionListProps = {
  data: Transaction[];
};

export default function TransactionList({ data }: TransactionListProps) {
  return (
    <FlatList
      className='mx-auto w-11/12 flex-1'
      data={data}
      keyExtractor={(item) => item.id || Math.random().toString()}
      renderItem={({ item }) => <TransactionItem {...item} />}
      ListFooterComponent={<View className='h-[40vh]' />}
      ItemSeparatorComponent={() => (
        <View className='mx-auto h-[1px] w-full rounded-lg bg-gray-200' />
      )}
    />
  );
}

type TransactionProps = Transaction;

function TransactionItem({
  id,
  name,
  amount,
  date,
  category,
  description,
}: TransactionProps) {
  const { removeTransaction } = useContext(AccountContext);

  const xTranslation = useSharedValue(0);
  const yTranslation = useSharedValue(0);
  const itemOpacity = useSharedValue(1);
  const iconOpacity = useSharedValue(0);

  const MAX_TRANSLATION_LEFT = -200;
  const MAX_TRANSLATION_RIGHT = 0;
  const CRITICAL_POINT = -100;
  const ANIMATION_TRAVEL = 20;

  const panGesture = Gesture.Pan()
    .onChange(({ translationX }) => {
      if (
        translationX > MAX_TRANSLATION_LEFT &&
        translationX < MAX_TRANSLATION_RIGHT
      ) {
        xTranslation.value = translationX;
      }
      iconOpacity.value = Math.max(
        0,
        (CRITICAL_POINT + ANIMATION_TRAVEL / 2 - translationX) /
          ANIMATION_TRAVEL,
      );
    })
    .onEnd(() => {
      if (xTranslation.value < CRITICAL_POINT) {
        itemOpacity.value = withTiming(0);
        yTranslation.value = withTiming(-75, undefined, (isFinished) => {
          if (isFinished) {
            runOnJS(removeTransaction)(id);
          }
        });
      } else {
        xTranslation.value = withTiming(0);
        iconOpacity.value = withTiming(0);
        itemOpacity.value = withTiming(1);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: xTranslation.value },
      { translateY: yTranslation.value },
    ],
    opacity: itemOpacity.value,
  }));

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    opacity: iconOpacity.value,
    transform: [{ translateY: yTranslation.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <>
        <Animated.View style={animatedStyle} className='relative w-full py-2'>
          <Text className='text-sm font-semibold text-gray-200'>
            {date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })}
          </Text>
          <View className='flex-row items-center justify-between'>
            <View>
              <Text className='font-semibold text-white'>{name}</Text>
              <Text className='-translate-y-1 text-sm text-gray-200'>
                {category}
              </Text>
            </View>
            <Text
              className={`-translate-y-1 font-semibold ${
                amount > 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {amount > 0 ? `R${amount}` : `-R${Math.abs(amount)}`}
            </Text>
          </View>
        </Animated.View>
        <Animated.View
          style={iconAnimatedStyle}
          className='absolute bottom-0 right-0 top-0 flex w-12 items-center justify-center'
        >
          <View className='flex aspect-square w-10 items-center justify-center rounded-lg bg-red-400'>
            <FontAwesome size={20} color={'white'} name='trash-o' />
          </View>
        </Animated.View>
      </>
    </GestureDetector>
  );
}
