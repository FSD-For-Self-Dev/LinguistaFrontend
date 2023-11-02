import { createSlice } from '@reduxjs/toolkit';
import { ActivityFilter, Word, WordsState } from './types';
import { words } from '../api/mock';

const initialState: WordsState = {
	words: [],
	filteringWords: [],
	filter: 'ALL',
};

const wordsSlice = createSlice({
	name: 'words',
	initialState,
	reducers: {
		getWords: (state) => {
			state.words = words;
			state.filteringWords = words;
		},

		setFilter(state, action: { payload: { filter: ActivityFilter; words: Array<Word> } }) {
			state.filteringWords = action.payload.words;
			state.filter = action.payload.filter;
		},
	},
});

export const wordsReducer = wordsSlice.reducer;
export const wordsSelector = (state: RootState) => state.words;
export const { getWords, setFilter } = wordsSlice.actions;
