import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { setUser } from '../../actions';
import { server } from '../../bff/bff';
import { useToast } from '../../components/toast';
import { XBtn, XInput } from '../../components/ui';
import { ROLE } from '../../constants';
import { useResetForm } from '../../hooks';
import { selectUserRole } from '../../selectors';

const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверный логин. Допускаются буквы и цифры')
		.min(3, 'Неверный логин. Минимум 3 символа')
		.max(15, 'Неверный логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки "# и %"',
		)
		.min(6, 'Неверный пароль. Минимум 6 символа')
		.max(30, 'Неверный пароль. Максимум 30 символов'),
	re_password: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Повтор пароля не совпадает'),
});

export const RegistrationForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			re_password: '',
		},
		resolver: yupResolver(regFormSchema),
	});
	const toast = useToast();
	const dispatch = useDispatch();
	useResetForm(reset);
	const roleId = useSelector(selectUserRole);
	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	const [isLoading, setIsLoading] = useState(false);
	const onSubmit = async ({ login, password }) => {
		setIsLoading(true);
		server.register(login, password).then(({ error, res }) => {
			setIsLoading(false);
			if (error) {
				toast.show({
					children: error,
					color: 'negative',
				});
				return;
			}
			dispatch(setUser(res));
			sessionStorage.setItem('userData', JSON.stringify(res));
		});
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className=" space-y-6 ">
			<div className="mt-2">
				<XInput
					outline={true}
					label="Username"
					placeholder="Username"
					{...register('login', { required: true })}
				/>
				{errors.login && (
					<div className="text-negative max-w-64">{errors.login?.message}</div>
				)}
			</div>
			<div className="mt-2">
				<XInput
					type="password"
					outline={true}
					label="Password"
					placeholder="Password"
					{...register('password', { required: true })}
				/>
				{errors.password && (
					<div className="text-negative max-w-64">
						{errors.password?.message}
					</div>
				)}
			</div>
			<div className="mt-2">
				<XInput
					type="password"
					outline={true}
					label="Repeat password"
					placeholder="Repeat password"
					{...register('re_password', { required: true })}
				/>
				{errors.re_password && (
					<div className="text-negative max-w-64">
						{errors.re_password?.message}
					</div>
				)}
			</div>
			<XBtn color="primary" type="submit" disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Sign Up'}
			</XBtn>
		</form>
	);
};
