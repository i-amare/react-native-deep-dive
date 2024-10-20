import { FontAwesome } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, View } from 'react-native';

export default function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View className='absolute bottom-0 left-0 flex w-full flex-row items-start justify-start'>
      <View className='mx-auto mb-12 flex flex-row justify-evenly rounded-3xl bg-gray-950 py-4'>
        {state.routes.map((route, index) => {
          const colour = state.index === index ? 'white' : 'gray';
          let icon = null;

          switch (route.name) {
            case 'home-screen':
              icon = <FontAwesome name='home' color={colour} size={24} />;
              break;
            case 'history-screen/index':
              icon = <FontAwesome name='history' color={colour} size={24} />;
              break;
          }

          return (
            <Pressable
              key={index}
              className='mx-6 flex items-center justify-center transition-all duration-700 active:scale-90 active:opacity-75'
              onPress={() => navigation.navigate(route.name)}
            >
              {icon}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
