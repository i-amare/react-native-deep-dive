import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface PageHeaderProps {
  title: string;
  onClick?: () => void;
}
export default function PageHeader({ title, onClick }: PageHeaderProps) {
  const router = useRouter();
  const safeArea = useSafeAreaInsets();

  return (
    <View
      style={{ transform: `translateY(${safeArea.top}px)` }}
      className='mt-4 flex w-full items-start justify-center'
    >
      <View className='absolute flex h-full w-full justify-center'>
        <Text className='text-center text-lg font-semibold text-white'>
          {title}
        </Text>
      </View>
      <Pressable
        onPress={onClick || router.back}
        className='ml-4 overflow-hidden rounded-full'
      >
        <BlurView className='rounded-full p-2'>
          <AntDesign size={22} color='white' name='arrowleft' />
        </BlurView>
      </Pressable>
    </View>
  );
}
