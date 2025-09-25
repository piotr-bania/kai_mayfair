'use client'

import Button_Action from '@/components/ui/buttons/Button_Action'

export default function Route_Button({ item, active, onOpenProspectModal }) {
	const base = 'w-full justify-start gap-3 transition'
	const hover = 'hover:bg-primary/70'
	const activeCls = 'bg-primary text-white'
	const disabledCls = 'opacity-70 cursor-not-allowed'

	const isAddProspect = item.href === '/prospects/new'
	const openModal = isAddProspect ? onOpenProspectModal : undefined

	return (
		<Button_Action
			text={item.text}
			href={item.isDisabled || isAddProspect ? undefined : item.href}
			startContent={<span>{item.icon}</span>}
			isDisabled={!!item.isDisabled}
			className={`text-white ${base} ${
				item.isDisabled ? disabledCls : hover
			} ${active ? activeCls : ''}`}
			color="transparent"
			radius="sm"
			onPress={openModal}
		/>
	)
}
