import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import {
	Alert,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Background from '@/components/background'
import { useAuth } from '@/lib/use-auth'
import { queryClient } from '@/utils/trpc'

const ProfileScreen = () => {
	const { user, signOut } = useAuth()

	const handleSignOut = () => {
		Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'Sign Out',
				style: 'destructive',
				onPress: async () => {
					await signOut({
						fetchOptions: {
							onSuccess: () => {
								queryClient.clear()
								router.replace('/(auth)/onboarding')
							}
						}
					})
				}
			}
		])
	}

	return (
		<Background>
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
					<View style={{ padding: 20 }}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: 20
							}}
						>
							<TouchableOpacity onPress={() => router.back()}>
								<View
									style={{
										width: 40,
										height: 40,
										borderRadius: 20,
										backgroundColor: '#FFFFFF',
										justifyContent: 'center',
										alignItems: 'center',
										shadowColor: '#000',
										shadowOffset: { width: 0, height: 2 },
										shadowOpacity: 0.1,
										shadowRadius: 8,
										elevation: 2
									}}
								>
									<Ionicons name='arrow-back' size={20} color='#424242' />
								</View>
							</TouchableOpacity>
							<Text
								style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}
							>
								Profile
							</Text>
							<View style={{ width: 40 }} />
						</View>

						{/* User Info Card */}
						<View
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 24,
								padding: 24,
								alignItems: 'center',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 8 },
								shadowOpacity: 0.1,
								shadowRadius: 32,
								elevation: 8,
								marginBottom: 20
							}}
						>
							<View
								style={{
									width: 80,
									height: 80,
									borderRadius: 40,
									backgroundColor: '#A8D5BA',
									justifyContent: 'center',
									alignItems: 'center',
									marginBottom: 16
								}}
							>
								<Text
									style={{ fontSize: 32, fontWeight: '700', color: '#000000' }}
								>
									{user?.name?.charAt(0)?.toUpperCase() || 'U'}
								</Text>
							</View>
							<Text
								style={{
									fontSize: 24,
									fontWeight: '700',
									color: '#000000',
									marginBottom: 8,
									textAlign: 'center'
								}}
							>
								{user?.name || 'User'}
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: '#757575',
									textAlign: 'center',
									marginBottom: 16
								}}
							>
								{user?.email}
							</Text>
						</View>

						{/* Settings Options */}
						<View
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 24,
								padding: 24,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 8 },
								shadowOpacity: 0.1,
								shadowRadius: 32,
								elevation: 8,
								marginBottom: 20
							}}
						>
							<Text
								style={{
									fontSize: 20,
									fontWeight: '700',
									color: '#000000',
									marginBottom: 16
								}}
							>
								Settings
							</Text>

							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingVertical: 12,
									borderBottomWidth: 1,
									borderBottomColor: '#F0F0F0'
								}}
							>
								<Ionicons name='notifications' size={24} color='#424242' />
								<Text
									style={{ fontSize: 16, color: '#424242', marginLeft: 12 }}
								>
									Notifications
								</Text>
								<Ionicons
									name='chevron-forward'
									size={20}
									color='#757575'
									style={{ marginLeft: 'auto' }}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingVertical: 12,
									borderBottomWidth: 1,
									borderBottomColor: '#F0F0F0'
								}}
							>
								<Ionicons name='shield' size={24} color='#424242' />
								<Text
									style={{ fontSize: 16, color: '#424242', marginLeft: 12 }}
								>
									Privacy & Security
								</Text>
								<Ionicons
									name='chevron-forward'
									size={20}
									color='#757575'
									style={{ marginLeft: 'auto' }}
								/>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									paddingVertical: 12,
									borderBottomWidth: 1,
									borderBottomColor: '#F0F0F0'
								}}
							>
								<Ionicons name='help-circle' size={24} color='#424242' />
								<Text
									style={{ fontSize: 16, color: '#424242', marginLeft: 12 }}
								>
									Help & Support
								</Text>
								<Ionicons
									name='chevron-forward'
									size={20}
									color='#757575'
									style={{ marginLeft: 'auto' }}
								/>
							</TouchableOpacity>
						</View>

						{/* Sign Out Button */}
						<TouchableOpacity
							onPress={handleSignOut}
							style={{
								backgroundColor: '#DC2626',
								borderRadius: 24,
								padding: 16,
								alignItems: 'center',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.2,
								shadowRadius: 16,
								elevation: 8
							}}
						>
							<Text
								style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}
							>
								Sign Out
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Background>
	)
}

export default ProfileScreen
