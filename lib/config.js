import cfg from '@/content/config.json'

/** Safe getter with default */
const F = (o, path, d) => path.split('.').reduce((a, k) => a?.[k], o) ?? d

/** Raw config (read-only) */
export const getConfig = () => cfg

/* ------------------------------ Core blocks ------------------------------ */

export const site = () => ({
	name: F(cfg, 'site.name', 'Restaurant'),
	title: F(cfg, 'site.title', 'Restaurant'),
	description: F(cfg, 'site.description', ''),
	domain: F(cfg, 'site.domain', ''),
	language: F(cfg, 'site.language', 'en-GB'),
})

export const nav = () => ({
	primary: F(cfg, 'navigation.primary', []),
	footer: F(cfg, 'navigation.footer', []),
	bookingCta: F(cfg, 'navigation.booking_cta', {
		label: 'Book a Table',
		href: '/reserve',
	}),
})

export const business = () => ({
	address: F(cfg, 'business.address', ''),
	city: F(cfg, 'business.city', ''),
	postcode: F(cfg, 'business.postcode', ''),
	country: F(cfg, 'business.country', ''),
	phone: F(cfg, 'business.phone', ''),
	email: F(cfg, 'business.email', {}),
	hours: F(cfg, 'business.hours', {}),
})

export const booking = () => ({
	provider: F(cfg, 'booking.provider', 'resy'),
	url: F(cfg, 'booking.url', ''),
	phoneBackup: F(cfg, 'booking.phone_backup', ''),
	notes: F(cfg, 'booking.notes', ''),
})

export const social = () => ({
	instagram: F(cfg, 'social.instagram', ''),
	facebook: F(cfg, 'social.facebook', ''),
	tiktok: F(cfg, 'social.tiktok', ''),
	x: F(cfg, 'social.x', ''),
	googleMaps: F(cfg, 'social.google_maps', ''),
	opentable: F(cfg, 'social.opentable', ''),
	resy: F(cfg, 'social.resy', ''),
})

export const integrations = () => ({
	gaId: F(cfg, 'integrations.ga_id', ''),
	gtmId: F(cfg, 'integrations.gtm_id', ''),
	metaPixelId: F(cfg, 'integrations.meta_pixel_id', ''),
	hotjarId: F(cfg, 'integrations.hotjar_id', ''),
})

export const transitions = () => ({
	overlay: {
		color: F(cfg, 'transitions.overlay.color', '#111111'),
		zIndex: F(cfg, 'transitions.overlay.zIndex', 100),
	},
	enter: {
		duration: F(cfg, 'transitions.enter.duration', 0.6),
		delay: F(cfg, 'transitions.enter.delay', 0),
		ease: F(cfg, 'transitions.enter.ease', 'easeInOut'),
	},
	exit: {
		duration: F(cfg, 'transitions.exit.duration', 0.6),
		delay: F(cfg, 'transitions.exit.delay', 0),
		ease: F(cfg, 'transitions.exit.ease', 'easeInOut'),
	},
	reduceMotion: !!F(cfg, 'transitions.reduce_motion', true),
})

/* -------------------------- Restaurant extensions ------------------------- */

export const policies = () => F(cfg, 'policies', {})
export const awards = () => F(cfg, 'awards', [])
export const menus = () => F(cfg, 'menus', [])

export const privateDining = () => ({
	email: F(cfg, 'private_dining.email', ''),
	phone: F(cfg, 'private_dining.phone', ''),
	brochureUrl: F(cfg, 'private_dining.brochure_url', ''),
	minGuests: F(cfg, 'private_dining.min_guests', 0),
	maxGuests: F(cfg, 'private_dining.max_guests', 0),
	notes: F(cfg, 'private_dining.notes', ''),
})

export const gifts = () => ({
	provider: F(cfg, 'gifts.provider', ''),
	url: F(cfg, 'gifts.url', ''),
})

export const locations = () => F(cfg, 'locations', [])

export const map = () => ({
	embedUrl: F(cfg, 'map.embed_url', ''),
	lat: F(cfg, 'map.lat', null),
	lng: F(cfg, 'map.lng', null),
})

export const seo = () => ({
	ogImage: F(cfg, 'seo.og_image', ''),
	twitterHandle: F(cfg, 'seo.twitter_handle', ''),
	robots: F(cfg, 'seo.robots', 'index,follow'),
})

export const newsletter = () => ({
	provider: F(cfg, 'newsletter.provider', ''),
	listId: F(cfg, 'newsletter.list_id', ''),
})

/* ------------------------------ Convenience ------------------------------ */

export const bookingHref = () => {
	const { url } = booking()
	// fall back to nav booking cta if present, else /reserve
	const fallback = F(cfg, 'navigation.booking_cta.href', '/reserve')
	return url || fallback
}

export const hasFeature = (path) => !!F(cfg, path, '')

/** Hours helpers (optional) */
export const hoursText = () => {
	const h = business().hours
	const chunks = []
	if (h.lunch) chunks.push(`Lunch: ${h.lunch}`)
	if (h.dinner) chunks.push(`Dinner: ${h.dinner}`)
	if (h.closed) chunks.push(`Closed: ${h.closed}`)
	return chunks.join(' · ')
}

/** Build Restaurant JSON-LD quickly */
export const restaurantJsonLd = () => {
	const s = site()
	const b = business()
	return {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		name: s.name || s.title,
		telephone: b.phone || undefined,
		address: {
			'@type': 'PostalAddress',
			streetAddress: b.address || undefined,
			addressLocality: b.city || undefined,
			postalCode: b.postcode || undefined,
			addressCountry: b.country || undefined,
		},
	}
}
