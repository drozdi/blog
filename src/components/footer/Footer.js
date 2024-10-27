import classNames from 'classnames';
import { Weather } from './weather/Weather';

export function Footer({ className }) {
	return (
		<footer
			className={classNames(
				'flex justify-between items-center py-4 px-10 shadow-footer bg-white text-sm',
				className,
			)}
		>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<Weather />
		</footer>
	);
}
