'use client'

import { useState } from 'react'
import { login } from '@/app/api/auth/login/actions'
import Custom_Input from '@/components/ui/inputs/Custom_Input'
import Button_Action from '@/components/ui/buttons/Button_Action'
import Card_Component from '@/components/ui/cards/Card_Component'

const Login_Form = () => {
	const [loading, setLoading] = useState(false)

	const handleLogin = async (e) => {
		e.preventDefault()
		setLoading(true)

		const formData = new FormData(e.target)

		await login(formData)
		setLoading(false)
	}

	return (
		<div className="animated_border">
			<Card_Component className="flex flex-col p-9">
				<form
					onSubmit={handleLogin}
					method="post"
					className="flex flex-col gap-3 text-left"
				>
					<Custom_Input
						type="text"
						label="Email Address"
						id="email"
						name="email"
						required
					/>

					<Custom_Input
						type="password"
						label="Password"
						id="password"
						name="password"
						required
					/>

					<div className="flex flex-row justify-end mt-large">
						{loading ? (
							<Button_Action
								color="primary"
								text="Loading..."
								isLoading
							/>
						) : (
							<Button_Action
								color="primary"
								text="Login"
								type="submit"
							/>
						)}
					</div>
				</form>
			</Card_Component>
		</div>
	)
}

export default Login_Form
