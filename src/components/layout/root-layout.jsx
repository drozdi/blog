import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import { Header } from '../header';

export const RootLayout = () => {
	return (
		<div className="w-full h-full grid grid-cols-1 grid-rows-layout">
			<Header className="row-start-1 row-end-2" />
			<main className="row-start-2 row-end-3">
				<Outlet />
			</main>
			<Footer className="row-start-3 row-end-4" />
		</div>
	);
};
