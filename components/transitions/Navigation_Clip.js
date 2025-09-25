'use client'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { usePathname, useRouter } from 'next/navigation'
import Leave_Animation from '@/components/transitions/Leave_Animation'

export default function Navigation_Clip() {
	const router = useRouter()
	const pathname = usePathname()
	const [container, setContainer] = useState(null)
	const [leavingTo, setLeavingTo] = useState(null)
	const [lastPath, setLastPath] = useState(pathname)

	useEffect(() => {
		setContainer(document.getElementById('overlay_root'))
	}, [])
	useEffect(() => {
		const onNav = (e) => setLeavingTo(e.detail?.href)
		window.addEventListener('navigate:clip', onNav)
		return () => window.removeEventListener('navigate:clip', onNav)
	}, [])
	useEffect(() => {
		if (!leavingTo) return
		if (pathname !== lastPath) {
			setLastPath(pathname)
			setLeavingTo(null)
		}
	}, [pathname, leavingTo, lastPath])

	if (!container) return null
	return createPortal(
		<AnimatePresence mode="wait">
			{leavingTo && (
				<Leave_Animation
					onAnimationComplete={() =>
						leavingTo && router.push(leavingTo)
					}
				/>
			)}
		</AnimatePresence>,
		container
	)
}
