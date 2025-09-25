'use client'

import { useMemo } from 'react'
import { Select, SelectItem } from '@heroui/react'

export default function Custom_Select({
	label,
	value,
	onChange,
	options = [],
	className = '',
}) {
	return (
		<Select
			label={label}
			selectedKeys={new Set([value])}
			onSelectionChange={(keys) => {
				const key = Array.from(keys)[0]
				onChange?.(key)
			}}
			size="sm"
			radius="sm"
			isRequired
			placement="inside"
			maxListboxHeight={400}
			className={className}
			classNames={{
				value: 'text-heading',
				trigger: 'text-heading',
				popoverContent: 'border border-divider',
			}}
		>
			{options.map((opt) => (
				<SelectItem key={opt.key} className="text-heading">
					{opt.label}
				</SelectItem>
			))}
		</Select>
	)
}
