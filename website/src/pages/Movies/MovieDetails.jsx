import { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig/instance";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addOrRemoveFromFavorites } from "../../store/slices/favorites";

function MovieDetails() {
	const favorites = useSelector((state) => state.favorites.favorites);
	// console.log("🚀 -> favorites:", favorites);

	const dispatch = useDispatch();

	const { id } = useParams();
	const [movie, setMovie] = useState({});

	async function getMovieDetails() {
		try {
			const response = await axiosInstance.get(`/movie/${id}?`, {
				params: {
					api_key: "0e98660d7c43c484ed7f42c56d60d48e",
				},
			});
			console.log(response.data);
			setMovie(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getMovieDetails();
	}, []);

	useEffect(() => {
		console.log(movie.genres);
		// movie.genres.map((genre) => console.log(genre.name));
	}, [movie]);

	const toggleFavorite = (event) => {
		dispatch(addOrRemoveFromFavorites(movie));
		console.log(event.target.fill);
	};

	return (
		<>
			<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<img
							alt={`${movie.backdrop_path} backdrop image`}
							className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
							src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
						/>
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								{movie.genres &&
									movie.genres.map((genre) => <span key={genre.id}>{`${genre.name} `}</span>)}
							</h2>
							<h1 className="text-white text-3xl title-font font-medium mb-1">{movie.title}</h1>
							<div className="flex mb-4">
								<span className="flex items-center">
									<span className="">{`${movie.vote_count} Reviews`}</span>
								</span>
								<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
									{movie && movie.vote_average && (
										<p className="text-sm title-font text-gray-500 tracking-widest">
											{`${movie.vote_average.toFixed(1)}/10`}
										</p>
									)}
								</span>
							</div>
							<p className="leading-relaxed border-b-2 border-gray-800 mb-5 pb-5">{movie.overview}</p>
							<div className="flex">
								<button
									onClick={(event) => {
										toggleFavorite(event);
									}}
									className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500">
									<svg
										fill={
											favorites.some((favorite) => favorite.id === movie.id)
												? "red"
												: "currentColor"
										}
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24">
										<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default MovieDetails;
