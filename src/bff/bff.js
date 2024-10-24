import { repUser } from './repUser.js';
export const server = {
	async autorize(authLogin, authPassword) {
		const users = await repUser.list().then((res) => res.json());
		const user = users.find((user) => user.login === authLogin);
		if (!user) {
			return {
				error: 'Пользователь ненайден',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}
		return {
			error: null,
			res: user,
		};
	},
	async register (regLogin, regPassword) {
		const existedUser = await repUser.login(regLogin);
	
		if (existedUser) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}
	
		const user = await repUser.post({
			login: regLogin,
			password: regPassword,
		}).then(res => res.json());
	
		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	};
};
