const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	darkMode: true, // or 'media' or 'class'
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				sky: colors.sky,
				teal: colors.teal,
				gray: colors.gray,
				darkgray: '#16151A',
				offwhite: '#E0E0E0',
			},
			width: {
				'8xl': '90rem',
				'9xl': '100rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar')
	],
};
