import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { ActivityFilter, Word, WordsState } from './types';
import { words } from '../api/mock';

const initialState: WordsState = {
  words: new Array<Word>(),
  filteringWords: new Array<Word>(),
  filter: 'ALL',
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    getWords: (state) => ({
      ...state,
      words: [...words],
      filteringWords: [...words],
    }),
    setFilter: (
      state,
      action: { payload: { filter: ActivityFilter; words: Word[] } },
    ) => ({
      ...state,
      filteringWords: [...action.payload.words],
      filter: action.payload.filter,
    }),
  },
});

export const wordsReducer = wordsSlice.reducer;
export const wordsSelector = (state: RootState) => state.words;
export const { getWords, setFilter } = wordsSlice.actions;
