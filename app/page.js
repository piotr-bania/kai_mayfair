import Headings from '@/components/ui/text/Headings'
import Paragraph from '@/components/ui/text/Paragraph'
import Route_Change from '@/components/transitions/Route_Change'

export default function Home_Page() {
	return (
		<main>
			<div className="min-h-screen flex flex-col items-center justify-center text-center gap-4 p-4 md:p-8 lg:p-12">
				<div className="flex flex-col">
					<Headings h1Text="Bespoke Core Starter Kit" />
					<Paragraph text="Minimal foundation for restaurant & hospitality websites" />
				</div>
				<div className="flex gap-4">
					<Route_Change
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/piotr-bania/bespoke_core"
					>
						View Documentation
					</Route_Change>
					<Route_Change href="/about">About Page</Route_Change>
				</div>
			</div>
		</main>
	)
}
