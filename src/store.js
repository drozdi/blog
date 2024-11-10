import { applyMiddleware, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer } from './reducers';

const reducer = () => ({
	user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
