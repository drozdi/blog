import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants';
const inititalState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
};
export function userReducer(state = inititalState, action) {
	switch (action.type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}
