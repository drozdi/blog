import { Link, useNavigate } from 'react-router-dom';
import { XBtn, XIcon } from '../../../ui';
export function ControlPanel() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col gap-2">
			<XBtn
				size="sm"
				outline={true}
				tonal={true}
				block={true}
				flat={true}
				to="/login"
			>
				Войти
			</XBtn>
			<div className="flex gap-4 text-2xl px-2">
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
