import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Favorites() {
	const favorites = useSelector((state) => state.favorites.favorites);
	console.log("🚀 -> favorites:", favorites);

	const navigate = useNavigate();

	return (
		<>
			<section className="text-gray-400 body-font bg-gray-900">
				<div className="container px-5 py-20 mx-auto">
					<div className="flex flex-wrap w-full mb-20">
						<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
								Favorite Movies
							</h1>
							<div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
						</div>
					</div>
					<div className="flex flex-wrap -m-4 mb-20">
						{favorites.map((movie) => (
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
				</div>
			</section>
		</>
	);
}

export default Favorites;
