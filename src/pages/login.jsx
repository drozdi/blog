import { LoginForm } from './components/login-form';

export function Login() {
	return (
		<div className="flex justify-center items-center min-h-full flex-1 flex-col gap-4  ">
			<h1 className="text-2xl">Авторизация</h1>
			<div className="border border-gray-300 py-5 px-5 max-w-96">
				<LoginForm />
			</div>
		</div>
	);
}
