import React, { useEffect, useState } from 'react';
import { api } from '../api';

export const UsersPage = () => {
	const [users, setUsers] = useState([]);
	console.log(users);

	useEffect(() => {
		api.get('users').then(({ data }) => setUsers(data.users));
	}, []);
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li>{user.username}</li>
				))}
			</ul>
		</div>
	);
};
