import axios from 'axios';
import { BACKEND_URL } from '@shared/lib/constants';

class Api {
	url: string;

	constructor() {
		this.url = BACKEND_URL;
	}

	async login(user: { username: string; email: string; password: string }) {
		const { data } = await axios.post(`${BACKEND_URL}/auth/login`, user);

		console.log(data);
	}
}

export const api = new Api();
