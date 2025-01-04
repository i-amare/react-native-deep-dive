import Place from "@/classes/Place";
import { PlacesContext } from "@/contexts/PlacesContext";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function AddPlace() {
  const { addPlace } = useContext(PlacesContext);
  const router = useRouter();

  const [placeName, setPlaceName] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");

  const onAddPlaceButton = () => {
    const place = new Place(placeName, placeAddress, { lat: 0, lng: 0 }, "");
    addPlace(place);
    router.navigate("/(tabs)");
  };

  return (
    <View className='flex-1 items-center justify-start bg-black p-8'>
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
      <Pressable
        onPressIn={onAddPlaceButton}
        className='mt-6 flex w-full items-center justify-center rounded-lg bg-gray-900 py-4'
      >
        <Text className='text-xl font-semibold text-white'>Add Place</Text>
      </Pressable>
    </View>
  );
}

interface FormInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function FormInput({
  label,
  value,
  placeholder,
  onChange,
}: FormInputProps) {
  return (
    <View className='my-2 w-full'>
      <Text className='mb-1 text-lg font-semibold text-white'>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#ccc'
        onChangeText={(text) => onChange(text)}
        className='w-full rounded-md bg-white px-2 py-3 text-lg text-black'
      />
    </View>
  );
}
