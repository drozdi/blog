import { useRoutes } from 'react-router-dom';
import { ToastProvider } from './components/toast';
import { routes } from './config/router';

function App() {
	const routesElement = useRoutes(routes());
	return <ToastProvider>{routesElement}</ToastProvider>;
}

export default App;
