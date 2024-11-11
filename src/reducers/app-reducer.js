import { ACTION_TYPE } from '../actions';

const initialState = {
	wasLogout: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		default:
			return state;
	}
};
