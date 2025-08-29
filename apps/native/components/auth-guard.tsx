import { Redirect } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'
import { useAuth } from '@/lib/use-auth'

interface AuthGuardProps {
	children: React.ReactNode
	requireAuth?: boolean
}

export const AuthGuard = ({
	children,
	requireAuth = false
}: AuthGuardProps) => {
	const { session, isPending } = useAuth()

	// Show loading spinner while checking authentication
	if (isPending) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color='#A8D5BA' />
			</View>
		)
	}

	// If authentication is required and user is not authenticated, redirect to auth
	if (requireAuth && !session) {
		return <Redirect href='/(auth)/onboarding' />
	}

	// If user is authenticated and trying to access auth pages, redirect to app
	if (session && !requireAuth) {
		return <Redirect href='/(app)/home' />
	}

	// Render children if authentication state matches requirements
	return <>{children}</>
}
