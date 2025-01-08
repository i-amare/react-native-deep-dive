import Place from "@/classes/Place";
import ImagePicker from "@/components/imagePicker";
import { PlacesContext } from "@/contexts/PlacesContext";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Image, Pressable, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormInput } from "../../components/formInput";

export default function AddPlace() {
  const { addPlace } = useContext(PlacesContext);
  const router = useRouter();

  const [placeName, setPlaceName] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");
  const [placeImage, setPlaceImage] = useState("");

  const onAddPlaceButton = () => {
    const place = new Place(
      placeName,
      placeAddress,
      { lat: 0, lng: 0 },
      placeImage,
    );
    addPlace(place);

    setPlaceName("");
    setPlaceAddress("");
    setPlaceImage("");

    router.navigate("/(tabs)");
  };

  return (
    <SafeAreaView className='w-full flex-1 items-center justify-start bg-black'>
      <ScrollView className='w-full flex-1 p-4'>
        <Text className='text-3xl text-white'>Add Place</Text>
        <FormInput
          label='Place Name'
          value={placeName}
          placeholder='Enter Place Name'
          onChange={(value) => setPlaceName(value)}
        />
        <FormInput
          label='Address'
          value={placeAddress}
          placeholder='Enter Address'
          onChange={(value) => setPlaceAddress(value)}
        />
        <ImagePicker setPlaceImage={setPlaceImage} />
        {placeImage && (
          <Image
            source={{ uri: placeImage }}
            className='mt-6 aspect-square w-full rounded-lg'
          />
        )}
        <Pressable
          onPressIn={onAddPlaceButton}
          className='mb-16 mt-6 flex w-full items-center justify-center rounded-lg bg-gray-900 py-4'
        >
          <Text className='text-xl font-semibold text-white'>Add Place</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
