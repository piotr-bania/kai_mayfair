// app/hero.mjs
import { heroui } from '@heroui/theme'

export default heroui({
	themes: {
		light: {
			layout: {
				radius: { small: '8px', medium: '12px', large: '16px' },
			},
			font: {
				sans: 'var(--font-body), ui-sans-serif, system-ui',
				body: 'var(--font-body), ui-sans-serif, system-ui',
				heading: 'var(--font-heading), ui-sans-serif, system-ui',
			},
			colors: {
				background: '#FFFFFF',
				foreground: '#FAFAFA',
				divider: '#E6E6E6',
				primary: { DEFAULT: '#6526D1', foreground: '#FFFFFF' },
				secondary: { DEFAULT: '#76688C', foreground: '#FFFFFF' },
				success: { DEFAULT: '#6FD1B5', foreground: '#07030F' },
				warning: { DEFAULT: '#D1B56F', foreground: '#07030F' },
				danger: { DEFAULT: '#D16F8C', foreground: '#FFFFFF' },
				heading: '#1C1C1E',
				text: '#3C3C43',
				off_white: '#F8F8F8',
				white: '#FFFFFF',
			},
		},

		dark: {
			layout: { radius: { small: '8px', medium: '12px', large: '16px' } },
			font: {
				sans: 'var(--font-body), ui-sans-serif, system-ui',
				body: 'var(--font-body), ui-sans-serif, system-ui',
				heading: 'var(--font-heading), ui-sans-serif, system-ui',
			},
			colors: {
				background: '#040404',
				foreground: '#090909',
				divider: '#111111',
				primary: { DEFAULT: '#6526D1', foreground: '#FFFFFF' },
				secondary: { DEFAULT: '#76688C', foreground: '#FFFFFF' },
				success: { DEFAULT: '#6FD1B5', foreground: '#07030F' },
				warning: { DEFAULT: '#D1B56F', foreground: '#07030F' },
				danger: { DEFAULT: '#D16F8C', foreground: '#FFFFFF' },
				text: '#B5B5C0',
				heading: '#F5F5F7',
				white: '#FFFFFF',
			},
		},
	},
})
