'use client'

import { ThemeProvider } from 'next-themes'
import { HeroUIProvider } from '@heroui/react'

export function Providers({ children }) {
	return (
		<HeroUIProvider>
			{/* <ThemeProvider
				attribute="class"
				defaultTheme="light"
				enableSystem={false}
				themes={['dark', 'light']}
			></ThemeProvider> */}
			{children}
		</HeroUIProvider>
	)
}
