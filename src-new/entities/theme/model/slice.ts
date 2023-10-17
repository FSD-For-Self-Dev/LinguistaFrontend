import { createSlice } from '@reduxjs/toolkit';
import { Theme, ThemeState } from './types';

const initialState: ThemeState = {
	theme: 'light',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: { payload: Theme }) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export const themeSelector = (state: RootState) => state.theme;
