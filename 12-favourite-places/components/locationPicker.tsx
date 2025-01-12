import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

interface LocationPickerProps {
  setPlaceAddress: (address: string) => void;
}

export function LocationPicker({ setPlaceAddress }: LocationPickerProps) {
  const [stringAddress, setStringAddress] = useState("");
  const [selectedLocation, setSelectedLocation] =
    useState<Location.LocationObject | null>(null);

  async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setSelectedLocation(location);
  }

  useEffect(() => {
    console.log(selectedLocation);
  }, [selectedLocation]);

  return (
    <View className='flex w-full flex-row items-center justify-between'>
      <View className='my-2 w-full'>
        <Text className='mb-1 text-lg font-semibold text-white'>Location</Text>
        <View className='flex w-full flex-row justify-between'>
          <TextInput
            value={stringAddress}
            placeholder='Enter Address'
            placeholderTextColor='#ccc'
            className='flex w-4/5 items-center rounded-l-lg bg-white px-2 py-3 text-lg text-black'
            onChangeText={(text) => setPlaceAddress(text)}
          />
          <Pressable
            onPressIn={getCurrentLocation}
            className='aspect-[5/3] h-16 items-center justify-center rounded-r-lg bg-gray-900 py-4'
          >
            <MaterialIcons name='location-on' size={24} color='white' />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
