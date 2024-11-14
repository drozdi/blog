import { XSpinner } from '../ui';
import './style.scss';
export function Loader() {
	return (
		<div className="absolute top-1/4 left-1/2 w-36 h-36">
			<XSpinner size="10em" color="primary" />
		</div>
	);
}
