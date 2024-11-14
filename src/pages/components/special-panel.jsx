import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { XBtn, XBtnGroup, XIcon } from '../../components/ui';
import { ROLE } from '../../constants';
import { selectUserRole } from '../../selectors';
export function SpecialPanel({ publishedAt, onPostRemove, id }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const isAdmin = roleId === ROLE.ADMIN;
	return (
		<div className="flex justify-between items-center">
			<div>
				{publishedAt && <XIcon className="mr-2">mdi-calendar-text-outline</XIcon>}
				{publishedAt}
			</div>
			{isAdmin && (
				<XBtnGroup round>
					<XBtn icon="mdi-pencil-box-outline" to={`/post/${id}/edit`} />
					{publishedAt && <XBtn icon="mdi-delete" />}
				</XBtnGroup>
			)}
		</div>
	);
}
