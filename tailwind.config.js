/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			// Main Color Palette
			colors: {
				// Accent Color
				accent: '#0F172A',

				// Background Colors
				primary: '#FFFFFF',
				secondary: '#F1F5F9',
				inverted: '#0F172A',

				// Text Colors
				display: '#0F172A',
				heading: '#0F172A',
				title: '#0F172A',
				caption: '#64748B',
				label: '#64748B',

				// State Colors
				success: '#2DD4BF',
				warning: '#FBBF24',
				error: '#F87171',
			},

			// Fonts
			fontFamily: {
				display: '',
				product: '',
			},

			// Typography
			fontSize: {
				display: ['78px', { lineHeight: '128px', fontWeight: 600 }],
				heading: ['20px', { lineHeight: '24px', fontWeight: 600 }],
				title: ['14px', { lineHeight: '20px', fontWeight: 500 }],
				caption: ['14px', { lineHeight: '20px', fontWeight: 400 }],
				label: ['12px', { lineHeight: '15px', fontWeight: 400 }],
				button: ['14px', { fontWeight: 600 }],
			},

			// Spacings
			spacing: {
				// Standard Spacings
				xs: '8px',
				sm: '12px',
				rg: '16px',
				md: '20px',
				lg: '24px',
				xl: '32px',
				xxl: '40px',
				xxxl: '48px',
				huge: '80px',

				// Switch Size
				track: '',
				thumb: '',

				// Avatar Size
				'avatar-sm': '40px',
				'avatar-rg': '50px',
				'avatar-lg': '70px',
			},

			// Borders
			// Color
			borderColor: {
				primary: '#E2E8F0',
				disabled: '#E2E8F0',
			},
			// Radius
			borderRadius: {
				primary: '8px',
				smooth: '12px',
			},
			// Width
			borderWidth: {
				thin: '0.5px',
				primary: '1px',
				thick: '2px',
			},
			ringColor: {
				primary: '#CBD5E1',
			},
			ringWidth: {
				thin: '0.5px',
				primary: '2px',
				thick: '3px',
			},
		},
	},
	plugins: [],
};
