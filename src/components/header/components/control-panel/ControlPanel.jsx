import { Link, useNavigate } from 'react-router-dom';
import '../../../ui/btn/XBtn.scss';
import { XIcon } from '../../../ui/icon/XIcon';
export function ControlPanel() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col gap-2">
			<Link
				className="!text-black x-btn x-btn--sm x-btn--plain x-btn--outline x-btn--block x-btn--tonal x-btn--flat"
				to="/login"
			>
				<div className="x-btn-outline"></div>
				<div className="x-btn-backdor"></div>
				<span className="x-btn-content">Войти</span>
			</Link>
			<div className="flex gap-4 text-2xl">
				<XIcon className="cursor-pointer" onClick={() => navigate(-1)}>
					mdi-skip-backward
				</XIcon>
				<Link to="/post">
					<XIcon>mdi-file-document-outline</XIcon>
				</Link>
				<Link to="/users">
					<XIcon>mdi-account-group</XIcon>
				</Link>
			</div>
		</div>
	);
}
