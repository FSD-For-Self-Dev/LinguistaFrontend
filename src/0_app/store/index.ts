import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '@entities/theme';
import { wordsReducer } from '@entities/words';
import { sessionReducer } from '@/4_entities/session';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		words: wordsReducer,
		session: sessionReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
