import AsyncStorage from "@react-native-async-storage/async-storage";

type Stores = "PlacesList";

export const storeData = async ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

export const readData = async (key: Stores) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};
