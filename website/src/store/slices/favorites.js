import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
	name: "favorites",
	initialState: { favorites: [] },
	reducers: {
		addOrRemoveFromFavorites: (state, action) => {
			const index = state.favorites.findIndex((favorite) => favorite.id === action.payload.id);
			if (index !== -1) {
				state.favorites.splice(index, 1);
			} else {
				state.favorites.push(action.payload);
			}
		},
	},
});

export const { addOrRemoveFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
