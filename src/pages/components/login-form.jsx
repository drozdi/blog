import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useToast } from '../../components/toast';
import { XBtn, XInput } from '../../components/ui';

const loginFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
});

export const LoginForm = () => {
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(loginFormSchema),
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		//const response = await api.post('auth/register', data);
		//localStorage.setItem('token', response.data.accessToken);
		setIsLoading(false);
		toast.show({
			children: 'Test 3',
			color: 'negative',
			icon: 'mdi-home',
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className=" space-y-6 ">
			<div className="mt-2">
				<XInput
					outline={true}
					label="Username"
					placeholder="Username"
					{...register('username', { required: true })}
				/>
			</div>
			<div className="mt-2">
				<XInput
					type="password"
					outline={true}
					label="Password"
					placeholder="Password"
					{...register('password', { required: true })}
				/>
			</div>
			<XBtn color="primary" type="submit" disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Sign Up'}
			</XBtn>
			<XBtn text={true} flat={true} to="/registration">
				Регистрация
			</XBtn>
		</form>
	);
};
