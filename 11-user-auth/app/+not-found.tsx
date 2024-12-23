import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
	return (
		<View className='flex-1'>
			<Text>Page not found</Text>
			<Link href='/'>Go to home screen</Link>
		</View>
	);
}