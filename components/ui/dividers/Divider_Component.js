import { Divider } from '@heroui/react'
import { motion as m } from 'motion/react'
import { fade_variant } from '@/animations/Fade'

const Divider_Component = ({ className }) => {
	return (
		<m.div variants={fade_variant} initial="hidden" animate="visible">
			<Divider
				className={`w-full border-divider my-3 px-3 ${className}`}
			/>
		</m.div>
	)
}

export default Divider_Component
