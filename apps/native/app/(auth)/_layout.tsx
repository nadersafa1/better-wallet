import { Stack } from 'expo-router'
import { View } from 'react-native'
import { AuthGuard } from '@/components/auth-guard'

export default function AuthLayout() {
	return (
		<AuthGuard requireAuth={false}>
			<View style={{ flex: 1, }}>
				<Stack
					screenOptions={{
						headerShown: false,
						contentStyle: { backgroundColor: 'transparent' }
					}}
				>
					<Stack.Screen name='index' />
					<Stack.Screen name='login' />
					<Stack.Screen name='register' />
					<Stack.Screen name='onboarding' />
					<Stack.Screen name='provider-selection' />
					<Stack.Screen name='account-setup' />
					<Stack.Screen name='forgot-password' />
				</Stack>
			</View>
		</AuthGuard>
	)
}
