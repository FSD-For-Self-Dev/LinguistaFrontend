import axios from 'axios';
import { BACKEND_URL } from '@shared/lib/constants';

class Api {
	private _url: string;

	constructor(url: string) {
		this._url = url;
	}

	async getVocabulary(sessionKey: string) {
		const res = await axios.get(`${this._url}/vocabulary/`, {
			headers: {
				Authorization: `Token ${sessionKey}`,
			},
		});

		return res.data;
	}
}

export const api = new Api(BACKEND_URL);
