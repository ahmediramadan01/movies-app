import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";
import moviesReducer from "./slices/movies";
import currentPageReducer from "./slices/currentPage";

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        movies: moviesReducer,
        currentPage: currentPageReducer,
    },
});

export default store;
