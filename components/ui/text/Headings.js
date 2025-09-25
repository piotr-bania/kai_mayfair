'use client'

import { motion as m } from 'motion/react'
import {
	heading_1_variant,
	heading_2_variant,
	heading_3_variant,
	heading_4_variant,
	heading_5_variant,
	heading_6_variant,
} from '@/animations/ui/Text_Variants'

const Headings = ({ className, ...rest }) => {
	const animationVariants = {
		h1: heading_1_variant,
		h2: heading_2_variant,
		h3: heading_3_variant,
		h4: heading_4_variant,
		h5: heading_5_variant,
		h6: heading_6_variant,
	}

	return (
		<div className={className}>
			{Object.entries(rest).map(([key, text]) => {
				if (!text) return null

				const level = key.toLowerCase().replace('text', '')
				const Tag = m[level] || m.h2
				const variant = animationVariants[level]

				return (
					<Tag
						key={level}
						initial="hidden"
						animate="visible"
						variants={variant}
						className={className}
					>
						{text}
					</Tag>
				)
			})}
		</div>
	)
}

export default Headings
