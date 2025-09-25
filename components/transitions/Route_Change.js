'use client'
import Link from 'next/link'

export default function Route_Change({ href, children, className, onClick }) {
	const handleClick = (e) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
		e.preventDefault()
		onClick?.()
		window.dispatchEvent(
			new CustomEvent('navigate:clip', { detail: { href } })
		)
	}
	return (
		<div className={className}>
			<Link href={href} onClick={handleClick}>
				{children}
			</Link>
		</div>
	)
}
