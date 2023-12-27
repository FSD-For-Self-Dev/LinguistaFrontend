import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '@entities/theme';
import { wordsReducer } from '@entities/words';

const rootReducer = combineReducers({
  theme: themeReducer,
  words: wordsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
