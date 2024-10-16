import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text } from 'react-native';

interface PageHeaderProps {
  title: string;
}
export default function PageHeader({ title }: PageHeaderProps) {
  const router = useRouter();

  return (
    <SafeAreaView className='relative flex w-full flex-row items-center justify-start p-4'>
      <Pressable
        onPress={() => router.back()}
        className='overflow-hidden rounded-full'
      >
        <BlurView className='rounded-full p-2'>
          <AntDesign size={22} color='white' name='arrowleft' />
        </BlurView>
      </Pressable>
      <Text className='text-center m-auto text-lg font-semibold text-white'>
        {title}
      </Text>
    </SafeAreaView>
  );
}
