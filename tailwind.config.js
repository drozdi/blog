/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
	safelist: [],
	theme: {
		extend: {
			colors: {
				primary: '#1976D2',
				secondary: '#5cbbf6',
				accent: '#9C27B0',
				positive: '#4caf50',
				negative: '#dc3545',
				info: '#2196f3',
				warning: '#fb8c00',
				surface: '#15171e',
				dark: '#15171e',
				dimmed: 'rgba(0,0,0,0.2)',
				separator: 'rgba(0, 0, 0, .15)',
			},
			borderRadius: {
				inherit: 'inherit',
			},
			gridTemplateRows: {
				layout: 'minmax(min-content, auto) minmax(auto, 1fr) minmax(min-content, auto)',
			},
			gridTemplateColumns: {
				layout: 'minmax(min-content, auto) minmax(auto, 1fr) minmax(min-content, auto)',
			},
			transitionProperty: {
				border: 'border',
				width: 'width',
				height: 'height',
				spacing: 'margin, padding',
			},
			borderWidth: {
				3: '3px',
				9: '9px',
				10: '10px',
			},
			boxShadow: {
				header: '0px -2px 17px #000',
				footer: '0px 2px 17px #000',
			},
		},
	},
	plugins: [],
};
