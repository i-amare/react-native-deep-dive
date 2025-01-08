import * as ImagePickerAPI from "expo-image-picker";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function ImagePicker() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePickerAPI.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className='mt-6 w-full'>
      <Pressable
        onPressIn={() => pickImage()}
        className='flex items-center justify-center rounded-md bg-gray-900 p-4'
      >
        <Text className='text-xl font-semibold text-white'>
          Choose Image from Camera Roll
        </Text>
      </Pressable>
      {image && (
        <Image
          source={{ uri: image }}
          className='mt-6 aspect-square w-full rounded-lg'
        />
      )}
    </View>
  );
}
