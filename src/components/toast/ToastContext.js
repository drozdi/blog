import { createContext, useContext } from 'react';

export const ToastContext = createContext({
	show(...args) {
		console.log('toast show', args);
	},
	replace(...args) {
		console.log('toast replace', args);
	},
	clear() {
		console.log('toast clear');
	},
});

export function useToast() {
	if (useContext(ToastContext)?.current) {
		return useContext(ToastContext).current;
	}
	return useContext(ToastContext);
}
