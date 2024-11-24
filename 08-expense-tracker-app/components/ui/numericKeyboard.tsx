import { FontAwesome5 } from '@expo/vector-icons';
import { Text, TouchableHighlight, View } from 'react-native';

interface NumericKeyboardProps {
  onKeyPress: (value: string) => void;
  onBackSpace: () => void;
}

const keyValues = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ',',
  '0',
  'backspace',
];

export default function NumericKeyboard({
  onKeyPress,
  onBackSpace,
}: NumericKeyboardProps) {
  return (
    <View className='h-[40vh] w-full border-t-2 border-t-gray-800'>
      <View className='flex h-full flex-row flex-wrap'>
        {keyValues.map((value, idx) =>
          renderKey(idx, value, onBackSpace, onKeyPress),
        )}
      </View>
    </View>
  );
}

function renderKey(
  idx: number,
  value: string,
  onBackSpace: () => void,
  onKeyPress: (value: string) => void,
) {
  return (
    <TouchableHighlight
      key={idx}
      className='h-1/4 w-1/3'
      onPress={() =>
        value === 'backspace' ? onBackSpace() : onKeyPress(value)
      }
      underlayColor='rgba(255, 255, 255, 0.2)'
    >
      <View className='h-full w-full items-center justify-center'>
        {value === 'backspace' ? (
          <FontAwesome5 name='backspace' size={24} color='white' />
        ) : (
          <Text className='text-xl font-semibold text-white'>{value}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
}
