import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// Компонентом PostPageProvider мы оборачиваем тем компоненты, где нам необходим доступ к нашейму контексту, в данном случае переменной PostPage - в этом компоненте необходим доступ к переменной posts.

// создаём контекст
export const PostContext = createContext(null);

// создаём провайдер, этот компонент занимается только бизнес логикой, мы здесь никакие ui интерфейсы не отрисовываем
export const PostPageProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
			setPosts(response.data);
			setIsLoading(false);
		});
	}, []);

	// также мы можем вынести в провайдер разные функции по работе с постами
	const updatePost = async (post) => {};

	const deletePost = async (id) => {};

	return (
		<PostContext.Provider value={{ posts, isLoading, updatePost, deletePost }}>
			{children}
		</PostContext.Provider>
	);
};
