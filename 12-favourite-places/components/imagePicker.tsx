import * as ImagePickerAPI from "expo-image-picker";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

interface ImagePickerProps {
  setPlaceImage: (image: string) => void;
}

export default function ImagePicker({ setPlaceImage }: ImagePickerProps) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      setPlaceImage(image);
    }
  }, [image]);

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
    </View>
  );
}
