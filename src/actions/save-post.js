import { setPost } from './set-post';

export const savePost = (rep, post) => (dispatch) => {
	return post.id
		? rep.patch(post.id, post).then(() => {
				dispatch(setPost(post));
				return post;
			})
		: rep
				.post({
					...post,
					published_at: new Date()
						.toISOString()
						.substring(0, 16)
						.replace('T', ' '),
				})
				.then((res) => res.json())
				.then((data) => {
					dispatch(setPost(data));
					return data;
				});
};
