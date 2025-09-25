'use client'

import Paragraph from '@/components/ui/text/Paragraph'
import Route_Button from '@/components/ui/buttons/Route_Button'
import Divider_Component from '@/components/ui/dividers/Divider_Component'

export default function Routes_Group({
	title,
	items = [],
	pathname = '/',
	onOpenProspectModal,
	showDivider = true,
}) {
	const visible = items.some((i) => !i.isDisabled)
	if (!visible) return null

	return (
		<div className="mb-3">
			<Paragraph
				text={title}
				className="pb-1 text-base uppercase opacity-80"
			/>
			<div className="space-y-1">
				{items.map((item) => {
					const active =
						!item.isDisabled &&
						item.href &&
						(pathname === item.href ||
							pathname.startsWith(item.href + '/'))

					return (
						<Route_Button
							key={`${title}-${item.text}`}
							item={item}
							active={active}
							onOpenProspectModal={onOpenProspectModal}
						/>
					)
				})}
			</div>
			{showDivider && <Divider_Component />}
		</div>
	)
}
