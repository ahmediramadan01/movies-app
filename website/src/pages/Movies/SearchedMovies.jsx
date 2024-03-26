import { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";

function SearchedMovies() {
	const [movies, setMovies] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();

	async function getMoviesData() {
		try {
			const response = await axiosInstance.get("/movie/popular?", {
				params: {
					api_key: "0e98660d7c43c484ed7f42c56d60d48e",
					page: currentPage,
				},
			});
			console.log(response.data.results);
			setTotalPages(response.data.total_pages);
			setMovies(response.data.results);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getMoviesData();
	}, []);

	useEffect(() => {
		getMoviesData();
	}, [currentPage]);

	const goToPreviousPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};
	const goToNextPage = () => {
		if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
	};

	return (
		<>
			<section className="text-gray-400 body-font bg-gray-900">
				<div className="container px-5 py-20 mx-auto">
					<div className="flex flex-wrap w-full mb-20">
						<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
								Search Results for ""
							</h1>
							<div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
						</div>
					</div>
					<div className="flex flex-wrap -m-4 mb-20">
						{movies.map((movie) => (
							<div key={movie.id} className="xl:w-1/4 md:w-1/2 p-4">
								<div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
									<img
										className="rounded w-full object-cover object-center mb-6"
										style={{ height: "453px" }}
										src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
										alt="content"
									/>
									<h3 className="tracking-widest text-cyan-400 text-xs font-medium title-font">
										{`${movie.vote_average.toFixed(1)}/10`}
									</h3>
									<button
										onClick={() => {
											navigate(`/movie-details/${movie.id}`);
										}}>
										<h2 className="text-lg text-white font-medium title-font mb-4 hover:opacity-75 transition-all">
											{movie.title.length <= 33 ? movie.title : `${movie.title.slice(0, 26)} ...`}
										</h2>
									</button>
									<p className="leading-relaxed text-base">{`${movie.overview.slice(0, 90)} ...`}</p>
								</div>
							</div>
						))}
					</div>
					<div className="flex items-center justify-center gap-10">
						<button
							className={`inline-flex text-white  rounded text-lg ${
								currentPage === 1
									? "cursor-auto bg-transparent"
									: "bg-gradient-to-r from-green-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 transition-all hover:text-black"
							}`}
							onClick={() => {
								goToPreviousPage();
							}}>
							Previous
						</button>
						<button
							className={`inline-flex text-white  rounded text-lg ${
								currentPage === totalPages
									? "cursor-auto bg-transparent"
									: "bg-gradient-to-r from-green-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 transition-all hover:text-black"
							}`}
							onClick={() => {
								goToNextPage();
							}}>
							Next
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default SearchedMovies;
