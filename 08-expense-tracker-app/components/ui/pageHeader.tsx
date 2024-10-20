import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

interface PageHeaderProps {
  title: string;
}
export default function PageHeader({ title }: PageHeaderProps) {
  const router = useRouter();

  return (
    <SafeAreaView className='relative left-0 top-0 flex w-full flex-row items-center justify-start'>
      <View className='absolute bottom-0 left-0 -z-10 flex h-full w-full items-center justify-end'>
        <Text className='text-center text-lg font-semibold text-white'>
          {title}
        </Text>
      </View>
      <Pressable
        onPress={() => router.back()}
        className='overflow-hidden rounded-full'
      >
        <BlurView className='rounded-full p-2'>
          <AntDesign size={22} color='white' name='arrowleft' />
        </BlurView>
      </Pressable>
    </SafeAreaView>
  );
}
