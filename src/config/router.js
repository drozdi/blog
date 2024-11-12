import { RootLayout } from '../components/layout/root-layout';
import { Login } from '../pages/login';
import { Registration } from '../pages/registration';
import { UsersPage } from '../pages/users';

export const routes = () => [
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <div>main</div>,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'registration',
				element: <Registration />,
			},
			{
				path: 'users',
				element: <UsersPage />,
			},
			{
				path: '/post',
				children: [
					{
						path: '',
						element: <div>post</div>,
					},
					{
						path: ':id',
						element: <div>post</div>,
					},
					{
						path: ':id/edit',
						element: <div>post edit</div>,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <div>Not Found</div>,
	},
];
