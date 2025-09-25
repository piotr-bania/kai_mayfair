'use client'

import { useMemo } from 'react'
import { DatePicker } from '@heroui/react'
import { PiCalendarDuotone } from 'react-icons/pi'
import { parseDate, parseDateTime } from '@internationalized/date'
import dayjs from 'dayjs'

export default function Custom_Date_Picker({
	label = 'Date',
	id = 'date',
	name = 'date',
	className = '',
	value,
	defaultValue,
	onChange,
	isDisabled = false,
	isRequired = false,
	error,
	granularity = 'day',
	locale = 'en-GB',
	minValue,
	maxValue,
}) {
	// --- helpers ---
	const toDateValue = (v) => {
		if (!v) return null
		if (typeof v === 'object' && (v.calendar || v.era || v.timeZone))
			return v
		const s = typeof v === 'string' ? v : dayjs(v).toISOString()
		if (granularity === 'minute') {
			const stamp = dayjs(s).format('YYYY-MM-DD[T]HH:mm')
			return parseDateTime(stamp)
		} else {
			const stamp = dayjs(s).format('YYYY-MM-DD')
			return parseDate(stamp)
		}
	}

	const portalContainer = useMemo(
		() => (typeof window !== 'undefined' ? document.body : undefined),
		[]
	)

	const dv = toDateValue(value)
	const ddv = toDateValue(defaultValue)
	const minDV = toDateValue(minValue)
	const maxDV = toDateValue(maxValue)

	return (
		<div className={`flex flex-col ${className}`}>
			<DatePicker
				id={`${id}_display`}
				name={`${name}_display`}
				aria-describedby={`${id}-error`}
				aria-invalid={error ? 'true' : 'false'}
				label={label}
				isRequired={isRequired}
				isDisabled={isDisabled}
				granularity={granularity}
				hideTimeZone={granularity === 'minute'}
				locale={locale}
				value={dv ?? undefined}
				defaultValue={ddv}
				minValue={minDV}
				maxValue={maxDV}
				onChange={onChange}
				selectorIcon={<PiCalendarDuotone className="size-5" />}
				// INPUT STYLES
				classNames={{
					label: 'text-heading/80 text-sm',
					inputWrapper: 'border border-divider',
					segment:
						'text-heading !text-heading data-[placeholder=true]:text-heading/60',
					selectorButton: 'text-heading',
				}}
				// POPOVER (escape modal overflow + dark)
				popoverProps={{
					portalContainer,
					offset: 8,
					classNames: {
						content:
							'bg-foreground border border-divider shadow-md',
					},
				}}
				// CALENDAR GRID STYLES
				calendarProps={{
					classNames: {
						base: 'bg-transparent',
						title: 'text-heading',
						cellButton:
							'rounded-md text-heading ' +
							'data-[hover=true]:bg-default/80 data-[hover=true]:text-heading ' +
							'data-[selected=true]:bg-primary data-[selected=true]:text-heading ' +
							'data-[today=true]:ring-1 data-[today=true]:ring-primary/80 ' +
							'data-[unavailable=true]:text-text/25 data-[outside-month=true]:text-text/25',
					},
				}}
				placeholderValue={
					granularity === 'minute'
						? toDateValue(new Date())
						: undefined
				}
				description={error ? undefined : null}
				errorMessage={
					error ? (
						<span
							id={`${id}-error`}
							className="text-danger text-sm"
						>
							{error}
						</span>
					) : undefined
				}
			/>

			{/* If you need a hidden raw value for non-React forms, keep this: */}
			{/* <input type="hidden" id={id} name={name} value={dv ? dayjs().toISOString() : ''} /> */}
		</div>
	)
}
