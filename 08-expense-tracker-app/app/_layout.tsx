import { AccountContextProvider } from '@/context/AccountContext';
import ModalContextProvider from '@/context/ModalContext';
import { Slot, useRouter } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.navigate('/home-screen');
  }, []);

  return (
    <AccountContextProvider>
      <ModalContextProvider>
        <GestureHandlerRootView className='flex-1'>
          <Slot />
        </GestureHandlerRootView>
      </ModalContextProvider>
    </AccountContextProvider>
  );
}
