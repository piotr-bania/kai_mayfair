'use client'

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@heroui/react'
import { cloneElement, isValidElement } from 'react'
import Headings from '@/components/ui/text/Headings'

export default function Modal_Component({
	isOpen,
	onOpenChange,
	title,
	size = '3xl',
	placement = 'center',
	children,
	footerLeft = null,
	footerRight = null,
}) {
	return (
		<Modal
			size={size}
			isOpen={isOpen}
			placement={placement}
			onOpenChange={onOpenChange}
			backdrop="blur"
			isDismissable={false}
			isKeyboardDismissDisabled={true}
			className="p-6"
			classNames={{ closeButton: 'cursor-pointer' }}
		>
			<ModalContent>
				{(internalClose) => {
					const injectedChild =
						typeof children === 'function'
							? children({ onClose: internalClose })
							: isValidElement(children)
							? cloneElement(children, { onClose: internalClose })
							: children
					return (
						<>
							<ModalHeader>
								<Headings h5Text={title} />
							</ModalHeader>

							<ModalBody>{injectedChild}</ModalBody>

							{(footerLeft || footerRight) && (
								<ModalFooter>
									<div>{footerLeft}</div>
									<div className="flex items-center gap-2">
										{footerRight}
									</div>
								</ModalFooter>
							)}
						</>
					)
				}}
			</ModalContent>
		</Modal>
	)
}
