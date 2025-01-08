import * as ImagePickerAPI from "expo-image-picker";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function ImagePicker() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePickerAPI.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className='w-full bg-red-400'>
      <Pressable
        onPressIn={() => pickImage()}
        className='flex items-center justify-center rounded-md bg-gray-900 p-4'
      >
        <Text className='text-2xl text-white'>
          Choose Image from Camera Roll
        </Text>
      </Pressable>
      {image && (
        <View className='flex-1 items-center justify-center'>
          <Image
            source={{ uri: image }}
            className='aspect-square w-full rounded-lg'
          />
        </View>
      )}
    </View>
  );
}
