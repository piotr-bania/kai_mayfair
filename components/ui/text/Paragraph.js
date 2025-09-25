'use client'

import { motion as m } from 'motion/react'
import { paragraph_variant } from '@/animations/ui/Text_Variants'

const Paragraph = ({ className, text }) => {
	return (
		<div className={className}>
			<m.p
				initial="hidden"
				animate="visible"
				variants={paragraph_variant}
				className={className}
			>
				{text}
			</m.p>
		</div>
	)
}

export default Paragraph
