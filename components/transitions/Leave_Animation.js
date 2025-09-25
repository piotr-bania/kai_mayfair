'use client'
import { createPortal } from 'react-dom'
import { motion as m } from 'motion/react'
import { useEffect, useState } from 'react'
import { transitions as cfg } from '@/lib/config'

export default function Leave_Animation({ onAnimationComplete }) {
	const t = cfg()
	const [container, setContainer] = useState(null)
	useEffect(() => {
		setContainer(document.getElementById('overlay_root'))
	}, [])
	if (!container) return null

	return createPortal(
		<m.div
			initial={{ clipPath: 'ellipse(50% 0% at 50% 100%)' }}
			animate={{
				clipPath: 'ellipse(100% 120% at 50% 100%)',
				transition: {
					duration: t.exit.duration,
					delay: t.exit.delay,
					ease: t.exit.ease,
				},
			}}
			onAnimationComplete={onAnimationComplete}
			style={{
				position: 'fixed',
				inset: 0,
				background: t.overlay.color,
				zIndex: t.overlay.zIndex,
			}}
		/>,
		container
	)
}
