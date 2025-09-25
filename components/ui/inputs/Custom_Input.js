import { Input } from '@heroui/react'
import Paragraph from '../text/Paragraph'

const Custom_Input = ({
	type,
	label,
	id,
	name,
	value,
	defaultValue,
	onChange,
	required,
	placeholder,
	error,
	className = '',
}) => {
	return (
		<div
			className={`flex flex-col ${className}`}
			style={{ position: 'relative' }}
		>
			<Input
				variant="underlined"
				size="lg"
				type={type}
				label={label}
				id={id}
				name={name}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
				aria-describedby={`${id}-error`}
				style={{ color: '#F5F5F7' }}
				className="text-inherit"
				classNames={{
					label: 'text-heading',
					inputWrapper: 'after:!bg-primary',
					input: 'text-inherit !opacity-100 placeholder:text-heading caret-heading',
				}}
			/>
			<span
				aria-hidden="true"
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0,
					height: 1,
					background: '#2a2a34',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>
			{error && (
				<Paragraph
					id={`${id}-error`}
					text={error}
					className="text-danger text-sm"
				/>
			)}
		</div>
	)
}

export default Custom_Input
