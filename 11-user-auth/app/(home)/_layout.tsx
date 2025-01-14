import { Tabs, useRootNavigationState, useRouter } from 'expo-router';
import React, { useContext, useLayoutEffect } from 'react';
import { Platform, useColorScheme } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { AuthContext } from '@/contexts/AuthContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const rootNavigation = useRootNavigationState();

  useLayoutEffect(() => {
    if (!isAuthenticated && rootNavigation?.key)
      router.navigate('/(auth)/login');
  }, [isAuthenticated, rootNavigation]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings/index'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='settings' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
