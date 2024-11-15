import { XInput } from '../../components/ui';
export function Search({ search, onChange }) {
	return (
		<XInput
			value={search}
			onChange={onChange}
			outline
			label="Найти"
			placeholder="Что ищим?"
		/>
	);
}
