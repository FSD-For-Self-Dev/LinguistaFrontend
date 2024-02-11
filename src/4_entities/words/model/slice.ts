import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ActivityFilter, Word, WordsState } from './types';
import { api } from '../api';

const initialState: WordsState = {
	words: [],
	filteringWords: [],
	filter: 'ALL',
};

export const getVocabulary = createAsyncThunk('words/getVocabulary', async (sessionKey: string) => {
	const data = await api.getVocabulary(sessionKey);
	return data.results;
});

const wordsSlice = createSlice({
	name: 'words',
	initialState,
	reducers: {
		setFilter(state, action: { payload: { filter: ActivityFilter; words: Array<Word> } }) {
			state.filteringWords = action.payload.words;
			state.filter = action.payload.filter;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getVocabulary.fulfilled, (state, action) => {
			state.words = action.payload;
			state.filteringWords = action.payload;
		});
	},
});

export const wordsReducer = wordsSlice.reducer;
export const wordsSelector = (state: RootState) => state.words;
export const { setFilter } = wordsSlice.actions;
