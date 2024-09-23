import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TabBar({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <View className='absolute bottom-0 left-0 flex w-full flex-row items-start justify-start'>
      <View className='mx-auto mb-12 flex flex-row justify-evenly rounded-3xl bg-gray-950 py-4'>
        {state.routes.map((route, index) => {
          const colour = state.index === index ? 'white' : 'gray';

          return (
            <TouchableOpacity
              key={index}
              className='flex mx-6 items-center justify-center'
              onPress={() => navigation.navigate(route.name)}
            >
              {
                // @ts-ignore
                descriptors[route.key].options.tabBarIcon({ color: colour })
              }
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
