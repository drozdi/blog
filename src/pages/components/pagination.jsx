import { XBtn } from '../../components/ui';

export function Pagination({ setPage, page, lastPage, limit, setLimit }) {
	return (
		<div className="w-full flex justify-between px-9">
			<XBtn disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</XBtn>
			<XBtn disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</XBtn>
			<XBtn flat active>
				Страница: {page}
			</XBtn>
			<XBtn disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</XBtn>
			<XBtn disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</XBtn>
			<select
				className="p-2"
				value={limit}
				onChange={({ target }) => setLimit(target.value)}
			>
				<option value="6">6</option>
				<option value="12">12</option>
				<option value="18">18</option>
				<option value="24">24</option>
			</select>
		</div>
	);
}

/*
export const Pagination = styled(PaginationContainer)`

`;*/
