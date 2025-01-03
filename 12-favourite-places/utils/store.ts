import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async ({ key, value }: { key: string; value: any }) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.error(e);
	}
};

const readData = async (key: string) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (e) {
		console.error(e);
	}
};
