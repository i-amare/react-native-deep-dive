import { FontAwesome } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';

type TabIconProps = {
  name: string;
  color: string;
  size: number;
};

const TabIcon = ({ name, color, size }: TabIconProps) => (
  <FontAwesome name={name} color={color} size={size} />
);

const getIconName = (routeName: string): string => {
  const icons: Record<string, string> = {
    'home-screen': 'home',
    'history-screen/index': 'history',
  };
  return icons[routeName] || 'question-circle';
};

export default function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View className='absolute bottom-0 left-0 flex w-full flex-row items-start justify-start'>
      <View className='mx-auto mb-12 flex flex-row justify-evenly rounded-3xl bg-gray-950 py-4'>
        {state.routes.map((route, index) => {
          const isActive = state.index === index;
          const color = isActive ? 'white' : 'gray';

          return (
            <Pressable
              key={route.key}
              className='mx-6 flex items-center justify-center transition-all duration-700 active:scale-90 active:opacity-75'
              onPress={() => navigation.navigate(route.name)}
            >
              <TabIcon name={getIconName(route.name)} color={color} size={24} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
