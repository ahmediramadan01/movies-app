import { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from "react-native";
import { Button } from "@rneui/themed";

export default Movies = ({ navigation }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
			);
			const data = await response.json();
			setMovies(data.results);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	};

	const renderMovieItem = ({ item }) => {
		return (
			<View style={styles.card}>
				<Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
				<Text style={styles.title}>{item.title}</Text>
				<Button onPress={() => navigation.navigate("Details", { id: item.id })} title="Details" />
			</View>
		);
	};

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	return (
		<View style={{ flex: 1, padding: 24 }}>
			<FlatList data={movies} renderItem={renderMovieItem} keyExtractor={(item) => item.id.toString()} />
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		borderRadius: 8,
		padding: 20,
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	image: {
		width: "100%",
		height: 200,
		marginBottom: 10,
		resizeMode: "cover",
		borderRadius: 8,
	},
});
