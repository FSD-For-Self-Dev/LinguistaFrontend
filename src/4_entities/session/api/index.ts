import { BACKEND_URL } from '@shared/lib/constants';

class Api {
	url: string;

	constructor() {
		this.url = BACKEND_URL;
	}

	async login(user: { username: string; email: string; password: string }) {
		const data = await fetch(`${BACKEND_URL}/auth/login/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		console.log(data);
	}
}

export const api = new Api();
