import { authClient } from './auth-client'

export const useAuth = () => {
	const { data: session, isPending, error } = authClient.useSession()

	return {
		session,
		isPending,
		error,
		isAuthenticated: !!session,
		user: session?.user,
		signIn: authClient.signIn,
		signUp: authClient.signUp,
		signOut: authClient.signOut
	}
}
