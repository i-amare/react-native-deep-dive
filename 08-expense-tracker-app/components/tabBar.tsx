import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TabBar({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {

  return (
    <View className='absolute bottom-0 left-0 w-full'>
      <View className='mx-auto mb-8 flex flex-row justify-evenly rounded-xl bg-slate-800 p-4'>
        {state.routes.map((route, index) => {
          return (
            <TouchableOpacity
              key={index}
              className='mx-2 flex-1 items-center'
              onPress={() => navigation.navigate(route.name)}
            >
              {
                // @ts-ignore
                descriptors[route.key].options.tabBarIcon({ color: 'white' })
              }
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
