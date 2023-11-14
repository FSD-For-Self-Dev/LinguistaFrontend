import { IWord } from '../model/types';
import { wordMock } from './wordMock';

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
};
