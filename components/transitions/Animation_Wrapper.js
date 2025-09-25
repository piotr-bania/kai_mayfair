'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Enter_Animation from '@/components/transitions/Enter_Animation'

export default function Animation_Wrapper({ children }) {
	const pathname = usePathname()
	const [isAnimating, setIsAnimating] = useState(true)

	useEffect(() => {
		setIsAnimating(true)
	}, [pathname])

	return (
		<>
			{isAnimating && (
				<Enter_Animation
					onAnimationComplete={() => setIsAnimating(false)}
				/>
			)}
			{children}
		</>
	)
}
