import FormInput from '@/components/ui/FormInput';
import { AuthContext } from '@/contexts/AuthContext';
import { Link } from 'expo-router';
import { useContext, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export default function SignUpScreen() {
  const { createNewUser, authenticate } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onCreateButtonPress = async () => {
    createNewUser(email, password, passwordConfirmation);
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center justify-between bg-black p-12'>
        <Text className='h-[20vh] text-center font-hurmit text-4xl text-white'>
          CodeBerry
        </Text>
        <View className='w-full'>
          <View className='mb-6'>
            <Text className='font-space text-2xl text-white'>
              Create Account
            </Text>
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
            <FormInput
              placeholder='Confirm Password'
              onChangeText={setPasswordConfirmation}
              title='Confirm Password'
              value={passwordConfirmation}
            />
            <Pressable
              onPressIn={onCreateButtonPress}
              className='mt-4 h-14 w-full items-center justify-center rounded-lg bg-gray-900'
            >
              <Text className='text-center font-hurmit text-xl text-white'>
                Create Account
              </Text>
            </Pressable>
          </View>
        </View>
        <View className='flex h-[20vh] w-full justify-center'>
          <Link
            href='/login'
            className='flex h-14 w-full items-center justify-center rounded-lg'
          >
            <Text className='text-center text-lg text-gray-600'>
              Have an account? Login instead!
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
