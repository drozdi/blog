import { useRoutes } from 'react-router-dom';
import { routes } from './config/router';

function App() {
	const routesElement = useRoutes(routes());
	return routesElement;

	/*return (
		<div className="w-full h-full grid grid-cols-1 grid-rows-layout">
			<Header className="row-start-1 row-end-2" />
			<main className="row-start-2 row-end-3">
				<Routes>
					<Route path="/" element={<div>main</div>} />
					<Route path="/login" element={<div>login</div>} />
					<Route path="/register" element={<div>register</div>} />
					<Route path="/users" element={<div>users</div>} />
					<Route path="/post" element={<div>post</div>} />
					<Route path="/post/:id" element={<div>post</div>} />
					<Route path="/post/:id/edit" element={<div>post edit</div>} />
					<Route path="*" element={<div>Not Found</div>} />
				</Routes>
			</main>
			<Footer className="row-start-3 row-end-4" />
		</div>
	);*/
}

export default App;
