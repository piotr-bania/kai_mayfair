import './globals.css'
import './globals.scss'
import { site } from '@/content/config'
import { Providers } from '@/app/providers'
import { sourceSans3Regular, cinzelBold } from '@/app/fonts'
import Lenis_Provider from '@/components/providers/Lenis_Provider'
import Navigation_Clip from '@/components/transitions/Navigation_Clip'
import Animation_Wrapper from '@/components/transitions/Animation_Wrapper'

export const metadata = {
	title: site.title || 'Website Title',
	description: site.description || 'Description of the website',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`light ${sourceSans3Regular.variable} ${cinzelBold.variable}`}
		>
			<body suppressHydrationWarning className="font-sans antialiased">
				{/* Navigation Overlay */}
				<div id="overlay_root" />
				<Navigation_Clip />

				{/* Main Content */}
				<Providers>
					<Animation_Wrapper>
						<Lenis_Provider />
						{children}
					</Animation_Wrapper>
				</Providers>
			</body>
		</html>
	)
}
