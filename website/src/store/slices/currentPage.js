import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice = createSlice({
	name: "currentPage",
	initialState: { currentPage: 1 },
	reducers: {
		goToPreviousPage: (state, action) => {
			state.currentPage = state.currentPage - 1;
		},
		goToNextPage: (state, action) => {
			state.currentPage = state.currentPage + 1;
		},
	},
});

export const { goToPreviousPage, goToNextPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
