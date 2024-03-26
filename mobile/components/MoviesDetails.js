import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, ActivityIndicator } from "react-native";

export default function MoviesDetails({ route }) {
	const movieId = route.params.id;
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMovieDetails(movieId);
	}, [movieId]);

	const fetchMovieDetails = async (movieId) => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US`
			);
			const data = await response.json();
			setMovie(data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching movie details:", error);
		}
	};

	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	return (
		<View>
			<Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} />
			<Text style={styles.title}>{movie.title}</Text>
			<Text style={styles.overview}>{movie.overview}</Text>
			<Text style={styles.lang}>Langauge: {movie.original_language}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
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
	},
	overview: {
		fontSize: 13,
		marginBottom: 10,
	},
	lang: {
		textAlign: "center",
		fontWeight: "bold",
	},
});
