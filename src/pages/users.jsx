import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { repRole, repUser } from '../bff/rep';
import { useToast } from '../components/toast';
import { XItem, XItemLabel, XItemSection, XList } from '../components/ui';
import { ROLE } from '../constants';
import { selectUserRole } from '../selectors';
import { UserRow } from './components/user-row';

export const UsersPage = () => {
	const roleId = useSelector(selectUserRole);
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [reload, setReload] = useState([]);
	const toast = useToast();
	useEffect(() => {
		if (![ROLE.ADMIN].includes(roleId)) {
			return;
		}
		repUser
			.list()
			.then((res) => res.json())
			.then((data) => setUsers(data));
		repRole
			.list()
			.then((res) => res.json())
			.then((data) => setRoles(data));
	}, [reload, roleId]);

	const onUserRemove = (id) => {
		if (![ROLE.ADMIN].includes(roleId)) {
			return;
		}
		const result = confirm('Удалить пользователя?');
		if (result === true) {
			repUser.delete(id).then(() => setReload(!reload));
		}
	};

	return (
		<>
			<XItemLabel tag="h1" header>
				Пользователи
			</XItemLabel>
			<XList separator>
				<XItem>
					<XItemSection>
						<XItemLabel>Логин</XItemLabel>
					</XItemSection>
					<XItemSection>
						<XItemLabel>Дата регистрации</XItemLabel>
					</XItemSection>
					<XItemSection>
						<XItemLabel>Роль</XItemLabel>
					</XItemSection>
					<XItemSection side></XItemSection>
				</XItem>
				{users.map(({ id, login, registered_at, role_id }) => (
					<UserRow
						key={id}
						id={id}
						login={login}
						registered_at={registered_at}
						role_id={role_id}
						roles={roles.filter(({ id }) => id !== ROLE.GUEST)}
						onRemove={() => onUserRemove(id)}
					/>
				))}
			</XList>
		</>
	);
};
