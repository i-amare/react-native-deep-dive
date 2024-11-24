import { NavigationContext } from '@/context/NavigationContext';
import { FontAwesome } from '@expo/vector-icons';
// @ts-ignore
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { Pressable, View } from 'react-native';

type TabIconProps = {
  name: string;
  color: string;
  size: number;
};

const TabIcon = ({ name, color, size }: TabIconProps) => (
  // @ts-ignore
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
  const { isVisible } = useContext(NavigationContext);

  return (
    isVisible && (
      <View className='pointer-events-none absolute bottom-0 left-0 right-0 mx-auto mb-12 items-center justify-end'>
        <View className='mx-auto flex flex-row justify-evenly rounded-3xl bg-gray-950 py-4'>
          {
            // @ts-ignore
            state.routes.map((route, index) => {
              const isActive = state.index === index;
              const color = isActive ? 'white' : 'gray';

              return (
                <Pressable
                  key={route.key}
                  className='mx-6 flex items-center justify-center transition-all duration-700 active:scale-90 active:opacity-75'
                  onPress={() => navigation.navigate(route.name)}
                >
                  <TabIcon
                    name={getIconName(route.name)}
                    color={color}
                    size={24}
                  />
                </Pressable>
              );
            })
          }
        </View>
      </View>
    )
  );
}
