'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/Server'

export async function login(formData) {
	const supabase = await createClient()

	const { data, error } = await supabase.auth.signInWithPassword({
		email: formData.get('email'),
		password: formData.get('password'),
	})

	if (error || !data?.user) {
		console.error('Auth failed:', error?.message)
		redirect('/error')
	}

	redirect('/dashboard')
}
