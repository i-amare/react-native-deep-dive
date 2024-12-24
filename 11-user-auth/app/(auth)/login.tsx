import { AuthContext } from '@/contexts/AuthContext';
import { Link, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

interface FormInput {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

function FormInput({ title, placeholder, value, onChangeText }: FormInput) {
  return (
    <View>
      <Text className='mb-1 font-hurmit text-lg text-gray-300'>{title}</Text>
      <TextInput
        className='mb-4 h-14 rounded-lg bg-white p-2 font-hurmit text-lg text-black'
        placeholder={placeholder}
        placeholderTextColor='#aaa'
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

export default function LoginScreen() {
  const { authenticate, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) router.navigate('/(home)');
  }, [isAuthenticated]);

  const onLoginButtonPress = () => {
    authenticate();
  };

  return (
    <SafeAreaView className='m-12 flex-1 justify-between bg-black'>
      <Text className='text-center font-hurmit text-4xl text-white'>
        CodeBerry
      </Text>
      <View>
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
          <Pressable
            onPressIn={onLoginButtonPress}
            className='mt-4 h-14 w-full items-center justify-center rounded-lg bg-gray-900'
          >
            <Text className='text-center font-hurmit text-xl text-white'>
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
      <Link
        href='/signup'
        className='flex h-14 w-full items-center justify-center rounded-lg'
      >
        <Text className='text-center text-lg text-gray-600'>
          No account? Create one!
        </Text>
      </Link>
    </SafeAreaView>
  );
}
