'use client'

import { logout } from '@/app/api/auth/logout/actions'
import Button_Action from '@/components/ui/buttons/Button_Action'

const Logout_Button = () => {
	return (
		<form action={logout}>
			<Button_Action color="danger" text="Logout" type="submit" />
		</form>
	)
}

export default Logout_Button
