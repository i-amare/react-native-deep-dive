import { PlacesContext } from "@/contexts/PlacesContext";
import { Feather } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Place() {
  const { places } = useContext(PlacesContext);
  const placeID = useLocalSearchParams().placeID as string;
  const place = places.find((place) => place.placeID === placeID);

  return (
    <View className='my-2 aspect-square w-full rounded-lg bg-gray-900'>
      <Stack.Screen
        options={{
          header: ({ navigation }) => (
            <ScreenHeader title={place?.title || ""} navigation={navigation} />
          ),
        }}
      />
      <Image
        source={{
          uri: place?.imageURL,
        }}
        className='h-2/3 w-full rounded-t-lg'
      />
      <View className='px-4 py-2'>
        <Text className='text-xl text-white'>{JSON.stringify(placeID)}</Text>
        <Text className='text-xl text-white'>{place?.title}</Text>
      </View>
    </View>
  );
}

interface ScreenHeaderProps {
  title: string;
  navigation: {
    goBack: () => void;
  };
}

function ScreenHeader({ title, navigation }: ScreenHeaderProps) {
  const onBackPress = () => {
    console.log("Back pressed");
    navigation.goBack();
  };

  const topInset = useSafeAreaInsets().top;

  return (
    <View
      style={{ marginTop: topInset }}
      className='relative flex flex-row items-center justify-center bg-black p-4'
    >
      <Pressable
        onPressIn={onBackPress}
        className='absolute left-2 flex items-center justify-center rounded-full p-2'
      >
        <Feather name='arrow-left' size={24} color='white' />
      </Pressable>
      <Text className='text-2xl text-white'>{title}</Text>
    </View>
  );
}
