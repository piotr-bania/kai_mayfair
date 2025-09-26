import Headings from '@/components/ui/text/Headings'
import Paragraph from '@/components/ui/text/Paragraph'
import Route_Change from '@/components/transitions/Route_Change'

const Demo_Section = () => {
	return (
		<section
			id="hero"
			className="w-full h-screen grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4 md:p-8 lg:p-12 justify-center items-center text-center"
		>
			<div className="col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-11">
				<Headings h1Text="Kai Mayfair" />

				<Headings h5Text="Our Philosophy of ‘Liberated Nanyang Cooking’" />
			</div>

			<div className="max-w-xl col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-11 mx-auto mb-8">
				<Headings h6Text="“A strong respect for heritage and craft, an insatiable appetite for innovation with purpose, and a clear & distinct personality in every dish.”" />
			</div>

			<Paragraph
				text="Kai has been the home of Nanyang Chinese cooking since 1978, bringing the flavours of the South China seas to London. We hold a great fondness of our Nanyang traditions with flavours recalled from our childhood memories of home cooking & visits to restaurants eating treats which defined specific dishes forever."
				className="col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-11"
			/>

			<div className="col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-11 flex flex-wrap items-center gap-4 m-auto">
				<Route_Change
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/piotr-bania/bespoke_core"
				>
					View Documentation
				</Route_Change>
				<Route_Change href="/about">About Page</Route_Change>
			</div>
		</section>
	)
}

export default Demo_Section
