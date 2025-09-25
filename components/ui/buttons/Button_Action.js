'use client'

import { motion as m } from 'motion/react'
import { Link, Button } from '@heroui/react'
import { button_variant } from '@/animations/ui/text/Text_Variants'

const Button_Action = ({
	radius = 'sm' || 'full',
	text,
	href,
	className,
	type,
	variant,
	isIconOnly = false,
	isDisabled = false,
	isLoading = false,
	startContent,
	endContent,
	onPress,
	color,
}) => {
	const Btn = (
		<Button
			radius={radius}
			className={`button leading-none ${className}`}
			aria-label={text}
			type={type}
			variant={variant}
			isDisabled={isDisabled || isLoading}
			isLoading={isLoading}
			isIconOnly={isIconOnly}
			startContent={startContent}
			endContent={endContent}
			onPress={onPress}
			color={color}
		>
			{text}
		</Button>
	)

	const Content = (
		<m.div variants={button_variant} initial="hidden" animate="visible">
			{Btn}
		</m.div>
	)

	if (!href || isDisabled) return Content

	const handleLinkClick = (e) => {
		if (onPress) {
			e.preventDefault()
			e.stopPropagation()
			onPress(e)
		}
	}

	return (
		<Link href={href} onClick={handleLinkClick} className="cta">
			{Content}
		</Link>
	)
}

export default Button_Action
