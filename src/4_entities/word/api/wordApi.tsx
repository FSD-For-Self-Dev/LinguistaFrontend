import { IWord, TDefinition } from '../model/types';
import { wordMock } from './wordMock';
import { definitionsMock } from './definitionsMock';

export const wordApi = {
	getWordById: async (id: string) => {
		console.log('[wordApi]: wordId=', id);

		const response: Promise<IWord> = new Promise((resolve) => {
			setTimeout(() => {
				resolve(wordMock);
			}, 1);
		});

		return await response;
	},

	getAllDefinitions: async (id: string) => {
		console.log('[wordApi]: wordId=', id);

		const response: Promise<TDefinition[]> = new Promise((resolve) => {
			setTimeout(() => {
				resolve(definitionsMock);
			}, 1);
		});

		return await response;
	},
};
