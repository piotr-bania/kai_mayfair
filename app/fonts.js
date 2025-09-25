import { Source_Sans_3, Cinzel } from 'next/font/google'

export const sourceSans3Regular = Source_Sans_3({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-body',
})

export const cinzelBold = Cinzel({
	subsets: ['latin'],
	weight: ['700'],
	display: 'swap',
	variable: '--font-heading',
})
