import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/instance";

export const moviesAction = createAsyncThunk(`movies/getAll`, async (currentPage = 1) => {
	const response = await axiosInstance.get(
		`/movie/top_rated?api_key=0e98660d7c43c484ed7f42c56d60d48e&page=${currentPage}`
	);
	const { results, totalPages } = response.data;

	return { results, totalPages };
});

const moviesSlice = createSlice({
	name: "movies",
	initialState: { movies: [] },
	extraReducers: (builder) => {
		builder.addCase(moviesAction.fulfilled, (state, action) => {
			state.movies = action.payload.results;
			state.totalPages = action.payload.totalPages;
		});
	},
});

export default moviesSlice.reducer;
