import { StyleSheet } from "react-native";

export const appStyling = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor:
			"radial-gradient(at center bottom, rgb(45, 55, 71), rgb(7, 14, 29), rgb(0, 0, 0))",
	},
	text: {
		fontSize: "24px",
		color: "white",
		fontWeight: "bold",
	},
});
