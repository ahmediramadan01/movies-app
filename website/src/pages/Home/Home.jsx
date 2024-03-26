import { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";

function Home() {
	const [searchedMovie, setSearchedMovie] = useState("");
	const navigate = useNavigate();

	const handleTypedMovie = (event) => {
		setSearchedMovie(event.target.value);
	};

	async function searchMovie(event) {
		event.preventDefault();

		if (!searchedMovie) return;

		try {
			const response = await axiosInstance.get(`/search/movie?`, {
				params: {
					query: searchedMovie,
					api_key: "0e98660d7c43c484ed7f42c56d60d48e",
				},
			});
			console.log(response.data.results[0]);
			navigate(`/movie-details/${response.data.results[0].id}`);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<section className="text-gray-400 bg-gray-900 body-font">
				<div className="container mx-auto flex flex-col px-5 pt-24 justify-center items-center">
					<img
						className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
						alt="hero"
						src="/tmdb-hero.svg"
					/>
					<div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center text-white">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">Welcome.</h1>
						<p className="mb-8 leading-relaxed">
							Millions of movies, TV shows and people to discover. Explore now.
						</p>
						<form
							className="flex w-full justify-center items-end"
							onSubmit={(event) => {
								searchMovie(event);
							}}>
							<div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
								<input
									placeholder="Search for a movie"
									type="text"
									id="hero-field"
									name="hero-field"
									className="w-full bg-transparent rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-cyan-950 focus:bg-transparent focus:border-cyan-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									data-ddg-input-type="unknown"
									onChange={(event) => {
										handleTypedMovie(event);
									}}
								/>
							</div>
							<button className="inline-flex text-white bg-gradient-to-r from-green-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 transition-all hover:text-black rounded text-lg">
								Search
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
