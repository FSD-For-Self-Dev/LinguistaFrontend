import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '../../4_entities/theme';
import { wordsReducer } from '../../4_entities/words';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		words: wordsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
