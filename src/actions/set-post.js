import { ACTION_TYPE } from './types';

export const setPost = (postData) => ({
	type: ACTION_TYPE.SET_POST_DATA,
	payload: postData,
});
