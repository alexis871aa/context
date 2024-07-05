import { usePost } from '../../hooks';

export const PostsPage = () => {
	const { posts, isLoading } = usePost();

	return (
		<div>
			<h1>Posts</h1>
			{isLoading ? (
				<div>Загрузка...</div>
			) : (
				<ul>
					{posts.length > 0 ? (
						posts.length > 0 &&
						posts.map(({ id, title }) => <li key={id}>{title}</li>)
					) : (
						<div>Нет постов!</div>
					)}
				</ul>
			)}
		</div>
	);
};
