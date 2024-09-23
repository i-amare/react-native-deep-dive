import TabBar from '@/components/tabBar';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name='home-screen/index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name='history-screen/index'
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='history' color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
