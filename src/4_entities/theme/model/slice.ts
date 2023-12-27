import { createSlice } from '@reduxjs/toolkit';
import ThemeState from '@shared/interfaces/ThemeState';
import Theme from '@shared/interfaces/Theme';
import { RootState } from '@app/store';

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: { payload: Theme }) => ({
      ...state,
      theme: action.payload,
    }),
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export const themeSelector = (state: RootState) => state.theme;
