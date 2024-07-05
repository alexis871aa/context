import { useContext } from 'react';
import { PostContext } from '../components';

export const usePost = () => {
	return useContext(PostContext);
};
