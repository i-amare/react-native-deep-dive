import { AuthContext } from "@/contexts/AuthContext";
import { useRootNavigationState, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
	const { isAuthenticated } = useContext(AuthContext);
	const router = useRouter();
	const rootNavigation = useRootNavigationState();

	useEffect(() => {
		if (!isAuthenticated && rootNavigation?.key)
			router.navigate("/(auth)/login");
	}, [isAuthenticated, rootNavigation]);

	return (
		<View className='flex-1 bg-black justify-center items-center'>
			<Text className='text-3xl text-white'>Home Screen</Text>
		</View>
	);
}
