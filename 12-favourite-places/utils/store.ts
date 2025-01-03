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
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.error(e);
	}
};

export const readData = async (key: Stores) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (e) {
		console.error(e);
	}
};
