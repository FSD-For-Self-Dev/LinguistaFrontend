import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '@entities/theme';
import { wordsReducer } from '@entities/words';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    words: wordsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
