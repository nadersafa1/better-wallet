import { Stack } from 'expo-router'

export default function HomeLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='index' />
			<Stack.Screen name='accounts' />
			<Stack.Screen name='account-details' />
			<Stack.Screen name='transactions' />
			<Stack.Screen name='transfer' />
			<Stack.Screen name='send-money' />
			<Stack.Screen name='credit-cards' />
			<Stack.Screen name='analytics' />
			<Stack.Screen name='budget' />
			<Stack.Screen name='reports' />
			<Stack.Screen name='profile' />
			<Stack.Screen name='settings' />
			<Stack.Screen name='transaction-details' />
			<Stack.Screen name='credit-card-details' />
			<Stack.Screen name='payment-history' />
			<Stack.Screen name='spending-analytics' />
			<Stack.Screen name='security-settings' />
			<Stack.Screen name='notifications' />
			<Stack.Screen name='currency-settings' />
			<Stack.Screen name='export-data' />
		</Stack>
	)
}
