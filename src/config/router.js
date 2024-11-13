import { RootLayout } from '../components/layout/root-layout';
import { Login } from '../pages/login';
import { PostPage } from '../pages/post';
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
						element: <PostPage />,
					},
					{
						path: ':id',
						element: <PostPage />,
					},
					{
						path: ':id/edit',
						element: <PostPage />,
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
