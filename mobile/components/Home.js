import { Text, View, StyleSheet, Image } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} />
			<Text style={styles.paragraph}>Movies App</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		padding: 30,
	},
	paragraph: {
		margin: 24,
		marginTop: 0,
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
	},
	logo: {
		height: 130,
		width: 130,
	},
});
