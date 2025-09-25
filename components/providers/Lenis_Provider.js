'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

const Lenis_Provider = () => {
	useEffect(() => {
		const lenis = new Lenis()

		const raf = (time) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
		}
	}, [])

	return null
}

export default Lenis_Provider
