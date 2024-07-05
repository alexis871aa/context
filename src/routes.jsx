import { MainPage, PostPageProvider, PostsPage } from './components/index.js';

export const routes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/posts',
		element: (
			<PostPageProvider>
				<PostsPage />
			</PostPageProvider>
		),
	},
];
