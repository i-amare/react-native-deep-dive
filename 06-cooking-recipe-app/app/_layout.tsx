import { FontAwesome6 } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <SafeAreaView className='flex-1 bg-gray-950'>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerTransparent: true,
          }}
        >
          <Drawer.Screen name='index' options={{
            title: 'Home'
          }} />
          <Drawer.Screen name='favourites/index' options={{
            title: 'Favourites'
          }} />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
