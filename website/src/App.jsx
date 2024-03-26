import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from "react";
import { LanguageProvider } from "./contexts/language";

import AppLayout from "./AppLayout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import TopRatedMovies from "./pages/Movies/TopRatedMovies";
import SearchedMovies from "./pages/Movies/SearchedMovies";
import MovieDetails from "./pages/Movies/MovieDetails";
import Favorites from "./pages/Favorites/Favorites";
import store from "./store/store";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "login", element: <LogIn /> },
			{ path: "signup", element: <SignUp /> },
			{ path: "top-rated-movies", element: <TopRatedMovies /> },
			{ path: "searched-movies", element: <SearchedMovies /> },
			{ path: "movie-details/:id", element: <MovieDetails /> },
			{ path: "favorites", element: <Favorites /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

function App() {
	const [language, setLanguage] = useState("en");

	return (
		<LanguageProvider value={{ language, setLanguage }}>
			<Provider store={store}>
				<RouterProvider router={routes} />
			</Provider>
		</LanguageProvider>
	);
}

export default App;
