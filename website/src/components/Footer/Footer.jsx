import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer className="text-white body-font">
				<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<NavLink
						to="/"
						className="flex title-font font-medium items-center md:justify-start justify-center text-white w-20">
						<img src="tmdb-logo.svg" alt="TMDB's Logo" />
					</NavLink>
					<p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
						© {new Date().getFullYear()} TMDB —
						<a
							href="https://github.com/ahmediramadan01"
							className="ml-1 hover:text-cyan-400 transition-all"
							target="_blank"
							rel="noopener noreferrer">
							@ahmediramadan01
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<a className="ml-3 " href="https://linkedin.com/in/ahmediramadan01" target="_blank">
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="0"
								className="w-5 h-5 hover:text-cyan-400 transition-all"
								viewBox="0 0 24 24">
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</span>
				</div>
			</footer>
		</>
	);
}

export default Footer;
