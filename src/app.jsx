import styles from './app.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';

export const App = () => {
	const router = createBrowserRouter(routes);

	return (
		<div className={styles.app}>
			<RouterProvider router={router} />
		</div>
	);
};
