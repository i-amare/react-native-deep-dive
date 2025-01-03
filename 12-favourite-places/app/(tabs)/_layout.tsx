import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: "All Places",
					tabBarIcon: ({ color }) => (
						<Fontisto size={28} name='world-o' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='addPlace'
				options={{
					title: "Add Place",
					tabBarIcon: ({ color }) => (
						<MaterialIcons size={28} name='add-location' color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
