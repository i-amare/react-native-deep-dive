import { FontAwesome5 } from '@expo/vector-icons';
import { Text, TouchableHighlight, View } from 'react-native';

interface NumericKeyboardProps {
  onKeyPress: (value: string) => void;
  onBackSpace: () => void;
}

export default function NumericKeyboard({
  onKeyPress,
  onBackSpace,
}: NumericKeyboardProps) {
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

  return (
    <View className='absolute bottom-0 left-0 h-[40vh] w-full border-t-2 border-t-gray-800'>
      <View className='flex h-full flex-row flex-wrap'>
        {keyValues.map((value, idx) => (
          <RenderKeyboardKey
            value={value}
            onBackSpace={onBackSpace}
            onKeyPress={onKeyPress}
            idx={idx}
          />
        ))}
      </View>
    </View>
  );
}

interface KeyProps {
  onKeyPress: (value: string) => void;
  onBackSpace: () => void;
  value: string;
  idx: number;
}

function RenderKeyboardKey({ value, onKeyPress, onBackSpace, idx }: KeyProps) {
  const content = (() => {
    if (value === 'backspace') {
      return <FontAwesome5 name='backspace' size={24} color='white' />;
    } else if (value !== null) {
      return <Text className='text-xl font-semibold text-white'>{value}</Text>;
    } else {
      return null;
    }
  })();

  return (
    <TouchableHighlight
      key={idx}
      className='h-1/4 w-1/3'
      onPress={() =>
        value ? onKeyPress(value) : value === null ? null : onBackSpace()
      }
      underlayColor='rgba(255, 255, 255, 0.2)'
    >
      <View className='h-full w-full items-center justify-center'>
        {content}
      </View>
    </TouchableHighlight>
  );
}
