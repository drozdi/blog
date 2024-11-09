import { RegistrationForm } from './components/registration-form';

export function Registration() {
	return (
		<div className="flex justify-center items-center min-h-full flex-1 flex-col gap-4  ">
			<h1 className="text-2xl">Авторизация</h1>
			<div className="border border-gray-300 py-10 px-10 max-w-[400px]">
				<RegistrationForm />
			</div>
		</div>
	);
}