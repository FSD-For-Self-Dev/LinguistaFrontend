import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, sessionState } from './types';
import { api } from '../api';

export const login = createAsyncThunk('sessionSlice/login', async (user: User) => {
	const res = await api.login(user);
	return res;
});

const initialState: sessionState = {
	sessionKey: '',
};

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.sessionKey = action.payload.key;
		});
	},
});

export const sessionReducer = sessionSlice.reducer;
export const sessionSelector = (root: RootState) => root.session;
