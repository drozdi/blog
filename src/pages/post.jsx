import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { loadPost, resetPost } from '../actions';
import { repPost } from '../bff/rep';
import { Loader, useToast } from '../components';
import { selectPost } from '../selectors';
import { PostContent } from './components/post-content';
import { PostForm } from './components/post-form';
export function PostPage() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const isCreating = !!useMatch('/post');
	const isEditing = !!useMatch('/post/:id/edit');
	const { id } = useParams();
	const post = useSelector(selectPost);
	const toast = useToast();
	useLayoutEffect(() => {
		dispatch(resetPost());
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		repPost.get(id).then((res) => res.json());
		dispatch(loadPost(repPost, id)).then(() => {
			setIsLoading(false);
		});
	}, [isCreating, dispatch, id]);
	if (isLoading) {
		return <Loader />;
	}
	return (
		<div className="flex items-center min-h-full flex-1 flex-col gap-4  ">
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<PostContent post={post} />
			)}
		</div>
	);
}
