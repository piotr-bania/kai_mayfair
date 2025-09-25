import Headings from '@/components/ui/text/Headings'
import Paragraph from '@/components/ui/text/Paragraph'
import Route_Change from '@/components/transitions/Route_Change'

export default function About_Page() {
	return (
		<main>
			<div className="min-h-screen flex flex-col items-center justify-center text-center gap-4 p-4 md:p-8 lg:p-12">
				<div className="flex flex-col">
					<Headings h1Text="About This Starter Kit" />
					<Paragraph text="This is a minimal Next.js 15 starter, designed for building bespoke restaurant and hospitality websites quickly." />
					<Route_Change href="/">Go Back Home</Route_Change>
				</div>
			</div>
		</main>
	)
}
