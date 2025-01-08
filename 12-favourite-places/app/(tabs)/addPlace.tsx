import Place from "@/classes/Place";
import ImagePicker from "@/components/imagePicker";
import { PlacesContext } from "@/contexts/PlacesContext";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormInput } from "../../components/formInput";

export default function AddPlace() {
  const { addPlace } = useContext(PlacesContext);
  const router = useRouter();

  const [placeName, setPlaceName] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");

  const onAddPlaceButton = () => {
    const place = new Place(placeName, placeAddress, { lat: 0, lng: 0 }, "");
    addPlace(place);

    setPlaceName("");
    setPlaceAddress("");

    router.navigate("/(tabs)");
  };

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center justify-start bg-black p-4'>
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
        <ImagePicker />
        <Pressable
          onPressIn={onAddPlaceButton}
          className='mt-6 flex w-full items-center justify-center rounded-lg bg-gray-900 py-4'
        >
          <Text className='text-xl font-semibold text-white'>Add Place</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
