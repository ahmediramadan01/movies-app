import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { languageContext } from "../../contexts/language";

function Header() {
	const { language, setLanguage } = useContext(languageContext);
	return (
		<>
			<header className="text-white bg-gray-900 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<NavLink to="/" className="flex title-font font-medium items-center mb-4 md:mb-0 w-36">
						<img src="/tmdb-logo.svg" alt="TMDB's Logo" />
					</NavLink>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-10">
						<NavLink to="/top-rated-movies" className={`hover:text-cyan-400 transition-all`}>
							Top Rated Movies
						</NavLink>
						<NavLink to="/favorites" className={`hover:text-cyan-400 transition-all`}>
							Favorites
						</NavLink>
					</nav>
					<NavLink
						to="login"
						className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-cyan-500 hover:text-black transition-all rounded text-base mt-4 md:mt-0">
						<span>Log In</span>
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</NavLink>
					<button
						className="ml-5 inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-cyan-500 hover:text-black transition-all rounded text-base mt-4 md:mt-0"
						onClick={() => {
							setLanguage(language == "en" ? "ar" : "en");
						}}>
						{language}
					</button>
				</div>
			</header>
		</>
	);
}

export default Header;
