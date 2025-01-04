import { PlacesContext } from "@/contexts/PlacesContext";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Image, Text, View } from "react-native";

export default function Place() {
  const { places } = useContext(PlacesContext);
  const placeID = useLocalSearchParams();

  return (
    <View className='my-2 aspect-square w-full rounded-lg bg-gray-900'>
      <Image
        source={{
          uri: "https://www.secretatlas.com/wp-content/uploads/2021/03/Hamnoy_Lofoten_Islands_Norway_Shutterstock_SecretAtlas_WebVersion.jpg",
        }}
        className='h-2/3 w-full rounded-t-lg'
      />
      <View className='px-4 py-2'>
        <Text className='text-xl text-white'>{JSON.stringify(placeID)}</Text>
        {/* <Text className='text-xl text-white'>{place.title}</Text>
        <Text className='text-lg text-white'>{place.address}</Text> */}
      </View>
    </View>
  );
}
