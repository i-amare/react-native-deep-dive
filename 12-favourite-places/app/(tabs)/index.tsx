import PlaceItem from "@/components/placeItem";
import { PlacesContext } from "@/contexts/PlacesContext";
import { useContext } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  const { places, addPlace, removePlace } = useContext(PlacesContext);

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center justify-center bg-black p-4 font-semibold'>
        <Text className='mb-4 text-3xl text-white'>All Places</Text>
        <FlatList
          data={places}
          renderItem={({ item }) => <PlaceItem place={item} />}
          className='w-full'
        />
      </View>
    </SafeAreaView>
  );
}
