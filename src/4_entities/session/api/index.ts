import axios from 'axios';
import { BACKEND_URL } from '@shared/lib/constants';
import { User } from '../model/types';

class Api {
	private _url: string;

	constructor(url: string) {
		this._url = url;
	}

	async login(user: User) {
		const { data } = await axios.post(`${this._url}/auth/login/`, user);

		return data;
	}
}

export const api = new Api(BACKEND_URL);
