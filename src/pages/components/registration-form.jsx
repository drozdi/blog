import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { XBtn, XInput } from '../../components/ui';

export const RegistrationForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setIsLoading(true);
		setIsLoading(false);
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
			<div className="mt-2">
				<XInput
					type="email"
					outline={true}
					label="email"
					placeholder="email"
					{...register('email', { required: true })}
				/>
			</div>
			<XBtn color="primary" type="submit" disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Sign Up'}
			</XBtn>
		</form>
	);
};
