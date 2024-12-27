import FormInput from '@/components/ui/FormInput';
import { AuthContext } from '@/contexts/AuthContext';
import { useButtonAnimation } from '@/hooks/AnimationHooks';
import { Link, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export default function LoginScreen() {
  const { authenticate, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const { tapGesture, scaleOnClick } = useButtonAnimation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) router.navigate('/(home)');
  }, [isAuthenticated]);

  const onLoginButtonPress = () => {
    authenticate();
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-between bg-black p-12'>
        <Text className='h-[20vh] text-center font-hurmit text-4xl text-white'>
          CodeBerry
        </Text>
        <View className='w-full'>
          <View className='mb-6'>
            <Text className='font-space text-2xl text-white'>Sign In</Text>
            <Text className='text-lg text-gray-600'>
              Please enter email address below
            </Text>
          </View>
          <View>
            <FormInput
              placeholder='Please enter your e-mail'
              onChangeText={setEmail}
              title='E-mail'
              value={email}
            />
            <FormInput
              placeholder='Password'
              onChangeText={setPassword}
              title='Password'
              value={password}
            />
            <GestureDetector gesture={tapGesture}>
              <Animated.View
                style={scaleOnClick}
                className='mt-4 h-14 w-full items-center justify-center rounded-lg bg-gray-900'
              >
                <Pressable
                  onPressIn={onLoginButtonPress}
                  className='flex h-full w-full items-center justify-center'
                >
                  <Text className='text-center font-hurmit text-xl text-white'>
                    Login
                  </Text>
                </Pressable>
              </Animated.View>
            </GestureDetector>
          </View>
        </View>
        <View className='flex h-[20vh] w-full justify-end'>
          <Link
            href='/signup'
            className='flex h-14 w-full items-center justify-center rounded-lg'
          >
            <Text className='text-center text-lg text-gray-600'>
              No account? Create one!
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
