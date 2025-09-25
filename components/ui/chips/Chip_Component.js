import { Chip } from '@heroui/react'

const Chip_Component = ({ status, classname = '' }) => {
	const statusColors = {
		new: 'default',
		contacted: 'primary',
		qualified: 'secondary',
		demo_sent: 'warning',
		follow_up: 'warning',
		proposal: 'secondary',
		won: 'success',
		lost: 'danger',
		on_hold: 'default',
	}

	const color = statusColors[status?.toLowerCase()] || 'default'

	return (
		<Chip
			color={color}
			size="sm"
			radius="sm"
			variant="solid"
			className={`px-2 ${classname}`}
		>
			{status}
		</Chip>
	)
}

export default Chip_Component
