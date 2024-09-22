import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' color={'black'} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name='history'
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='history' color={'black'} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
