'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const STROKE = '#EAE6E1'
const FILL = '#EAE6E1'

// timings
const STAGGER = 0.5
const DELAY_CHILDREN = 0.5
const DRAW_DUR = 1.0
const LAST_START = DELAY_CHILDREN + STAGGER * 2
const FILL_DELAY = LAST_START + DRAW_DUR - 1 // your tweak

// base SVG artboard
const BASE_W = 342
const BASE_H = 332
const RATIO = BASE_W / BASE_H // ≈1.03012

// ---- helpers: lock/unlock scroll ----
function lockScroll() {
	const y = window.scrollY || 0
	document.documentElement.style.overflow = 'hidden'
	document.body.style.overflow = 'hidden'
	document.body.style.position = 'fixed'
	document.body.style.top = `-${y}px`
	document.body.style.left = '0'
	document.body.style.right = '0'
	document.body.style.width = '100%'
	document.body.dataset.lockedScrollY = String(y)
}
function unlockScroll() {
	const y = parseInt(document.body.dataset.lockedScrollY || '0', 10)
	document.documentElement.style.overflow = ''
	document.body.style.overflow = ''
	document.body.style.position = ''
	document.body.style.top = ''
	document.body.style.left = ''
	document.body.style.right = ''
	document.body.style.width = ''
	delete document.body.dataset.lockedScrollY
	window.scrollTo(0, y)
}

const container = {
	initial: { opacity: 1 },
	animate: {
		opacity: 1,
		transition: { staggerChildren: STAGGER, delayChildren: DELAY_CHILDREN },
	},
}

const draw = {
	initial: { pathLength: 0, opacity: 1 },
	animate: {
		pathLength: 1,
		opacity: 1,
		transition: { duration: DRAW_DUR, ease: 'easeInOut' },
	},
}

export default function Intro() {
	const [entered, setEntered] = useState(false)

	// total intro time: wait until move-to-corner finishes
	useEffect(() => {
		lockScroll()
		const totalMs = (FILL_DELAY + 1 + 0.75) * 1000 // (delay to move) + duration
		const t = setTimeout(() => {
			setEntered(true)
			unlockScroll()
		}, totalMs)
		return () => {
			clearTimeout(t)
			unlockScroll()
		}
	}, [])

	return (
		<div
			className="w-full h-screen"
			style={{
				'--logoH': 'clamp(40px, 6.25vw, 60px)', // 40→60
				'--logoM': 'clamp(20px, 3vw, 40px)', // 20→40
				'--ratio': RATIO,
			}}
		>
			<motion.div
				className="fixed"
				initial={{
					top: '50%',
					left: '50%',
					x: -BASE_W / 2,
					y: -BASE_H / 2,
					width: BASE_W,
					height: BASE_H,
				}}
				animate={
					entered
						? {
								top: 'var(--logoM)',
								left: 'var(--logoM)',
								x: 0,
								y: 0,
								width: 'calc(var(--logoH) * var(--ratio))',
								height: 'var(--logoH)',
						  }
						: {
								top: 'var(--logoM)',
								left: 'var(--logoM)',
								x: 0,
								y: 0,
								width: (BASE_W / BASE_H) * 60, // initial target for the move
								height: 60,
						  }
				}
				transition={{
					delay: entered ? 0 : FILL_DELAY + 1,
					duration: entered ? 0.25 : 0.75,
					ease: 'easeInOut',
				}}
			>
				{/* STROKE */}
				<motion.svg
					variants={container}
					initial="initial"
					animate="animate"
					viewBox="0 0 341.53 332.28"
					className="absolute inset-0 w-full h-full"
					fill="none"
					stroke={STROKE}
					strokeWidth={1}
					strokeLinecap="round"
					strokeLinejoin="round"
					vectorEffect="non-scaling-stroke"
					preserveAspectRatio="xMidYMid meet"
				>
					<motion.path
						variants={draw}
						d="M80.77,2.46h28.29v157.85c0,34.44-4.1,47.97-17.22,57.81h17.22v74.62c0,18.04,4.51,31.98,7.79,35.67l2.87,2.87h-27.88c-.82-.41-2.05-.82-3.28-2.05-2.05-2.05-7.79-15.58-7.79-36.49v-54.94h-26.24v93.48h-28.7v-93.48H0l11.07-26.24h14.76V2.46h28.7v209.1h6.56c14.35,0,19.68-13.53,19.68-44.69V2.46Z"
					/>
					<motion.path
						variants={draw}
						d="M167.69,331.28V44.28c0-29.52,13.53-44.28,41-44.28s41.82,14.76,41.82,44.28v287h-28.29v-93.48h-26.24v93.48h-28.29ZM222.22,211.56V41c0-10.66-4.51-15.99-13.12-15.99s-13.12,5.33-13.12,15.99v170.56h26.24Z"
					/>
					<motion.path
						variants={draw}
						d="M341.53,2.46v328.82h-28.29V2.46h28.29Z"
					/>
				</motion.svg>

				{/* FILL */}
				<motion.svg
					viewBox="0 0 341.53 331.28"
					className="absolute inset-0 w-full h-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: FILL_DELAY,
						duration: 2.5,
						ease: 'easeOut',
					}}
					preserveAspectRatio="xMidYMid meet"
				>
					<g>
						<path
							fill={FILL}
							d="M80.77,2.46h28.29v157.85c0,34.44-4.1,47.97-17.22,57.81h17.22v74.62c0,18.04,4.51,31.98,7.79,35.67l2.87,2.87h-27.88c-.82-.41-2.05-.82-3.28-2.05-2.05-2.05-7.79-15.58-7.79-36.49v-54.94h-26.24v93.48h-28.7v-93.48H0l11.07-26.24h14.76V2.46h28.7v209.1h6.56c14.35,0,19.68-13.53,19.68-44.69V2.46Z"
						/>
						<path
							fill={FILL}
							d="M167.69,331.28V44.28c0-29.52,13.53-44.28,41-44.28s41.82,14.76,41.82,44.28v287h-28.29v-93.48h-26.24v93.48h-28.29ZM222.22,211.56V41c0-10.66-4.51-15.99-13.12-15.99s-13.12,5.33-13.12,15.99v170.56h26.24Z"
						/>
						<path
							fill={FILL}
							d="M341.53,2.46v328.82h-28.29V2.46h28.29Z"
						/>
					</g>
				</motion.svg>
			</motion.div>
		</div>
	)
}
