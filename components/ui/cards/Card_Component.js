'use client'

import '@/styles/animated_border.scss'
import { Card } from '@heroui/react'
import { motion as m } from 'motion/react'
import { card_variant } from '@/animations/ui/cards/Card_Variants'

const Card_Component = ({ animated_border, className, radius, children }) => {
	return (
		<m.div
			className={animated_border ? 'animated_border' : 'w-full'}
			initial="hidden"
			animate="visible"
			variants={card_variant}
		>
			<Card
				className={`bg-foreground border-divider p-3 drop-shadow-sm ${className}`}
				radius={radius}
			>
				{children}
			</Card>
		</m.div>
	)
}

export default Card_Component
