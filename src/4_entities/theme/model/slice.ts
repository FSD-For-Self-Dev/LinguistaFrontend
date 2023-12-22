import { createSlice } from '@reduxjs/toolkit';
import Theme from '@shared/constants/enums/Theme.ts';
import ThemeState from '@shared/interfaces/ThemeState.ts';

const initialState: ThemeState = {
	theme: Theme.light,
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
