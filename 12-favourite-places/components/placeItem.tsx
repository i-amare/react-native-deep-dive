import Place from "@/classes/Place";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

interface PlaceItemProps {
  place: Place;
}

export default function PlaceItem({ place }: PlaceItemProps) {
  return (
    <Link
      href={{
        pathname: "/places/[placeID]",
        params: { placeID: place.placeID },
      }}
      className='my-2 aspect-square w-full rounded-lg bg-gray-900'
    >
      <Image
        source={{
          uri: "https://www.secretatlas.com/wp-content/uploads/2021/03/Hamnoy_Lofoten_Islands_Norway_Shutterstock_SecretAtlas_WebVersion.jpg",
        }}
        className='h-2/3 w-full rounded-t-lg'
      />
      <View className='px-4 py-2'>
        <Text className='text-xl text-white'>{place.title}</Text>
        <Text className='text-lg text-white'>{place.address}</Text>
      </View>
    </Link>
  );
}
