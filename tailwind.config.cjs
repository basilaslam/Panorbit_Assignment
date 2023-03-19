/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,css}',],
	theme: {

		extend: {
			colors : {
				'primary-blue': '#4153C8',
				'secondery-blue': '#5F3AC8',
				'grayed': '#545454',
				'grray' : '#9A9A9A',
				'fade-gray':'#EEEEEE',
				'btn-danger':'#D55151'
			}
		},
		
	},
	plugins: [],
};