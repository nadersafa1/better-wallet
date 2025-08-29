import { Ionicons } from '@expo/vector-icons'
import type { Route } from 'expo-router'
import { router } from 'expo-router'
import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	Switch,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const SettingsScreen = () => {
	const [notificationsEnabled, setNotificationsEnabled] = React.useState(true)
	const [biometricEnabled, setBiometricEnabled] = React.useState(false)

	const settingsSections = [
		{
			title: 'Account',
			items: [
				{ id: 'profile', title: 'Profile', icon: 'person', route: '/profile' },
				{
					id: 'security',
					title: 'Security Settings',
					icon: 'shield-checkmark',
					route: '/security-settings'
				},
				{
					id: 'notifications',
					title: 'Notifications',
					icon: 'notifications',
					route: '/notifications'
				}
			]
		},
		{
			title: 'Preferences',
			items: [
				{
					id: 'currency',
					title: 'Currency Settings',
					icon: 'cash',
					route: '/currency-settings'
				},
				{
					id: 'language',
					title: 'Language',
					icon: 'language',
					route: '/language'
				},
				{ id: 'theme', title: 'Theme', icon: 'color-palette', route: '/theme' }
			]
		},
		{
			title: 'Data & Privacy',
			items: [
				{
					id: 'export',
					title: 'Export Data',
					icon: 'download',
					route: '/export-data'
				},
				{
					id: 'backup',
					title: 'Backup & Restore',
					icon: 'cloud-upload',
					route: '/backup'
				},
				{
					id: 'privacy',
					title: 'Privacy Policy',
					icon: 'document-text',
					route: '/privacy'
				}
			]
		},
		{
			title: 'Support',
			items: [
				{
					id: 'help',
					title: 'Help & Support',
					icon: 'help-circle',
					route: '/help'
				},
				{
					id: 'feedback',
					title: 'Send Feedback',
					icon: 'chatbubble',
					route: '/feedback'
				},
				{
					id: 'about',
					title: 'About',
					icon: 'information-circle',
					route: '/about'
				}
			]
		}
	]

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#A8D5BA' }}>
			<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
				{/* Header */}
				<View style={{ padding: 20, paddingBottom: 16 }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center'
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
						<Text style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}>
							Settings
						</Text>
						<View style={{ width: 40 }} />
					</View>
				</View>

				{/* Quick Settings */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Quick Settings
					</Text>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							borderRadius: 24,
							padding: 24,
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 8 },
							shadowOpacity: 0.1,
							shadowRadius: 32,
							elevation: 8
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: 20
							}}
						>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<View
									style={{
										width: 40,
										height: 40,
										borderRadius: 20,
										backgroundColor: '#A8D5BA',
										justifyContent: 'center',
										alignItems: 'center',
										marginRight: 16
									}}
								>
									<Ionicons name='notifications' size={20} color='#424242' />
								</View>
								<View>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#000000'
										}}
									>
										Push Notifications
									</Text>
									<Text style={{ fontSize: 14, color: '#757575' }}>
										Get notified about transactions
									</Text>
								</View>
							</View>
							<Switch
								value={notificationsEnabled}
								onValueChange={setNotificationsEnabled}
								trackColor={{ false: '#E0E0E0', true: '#A8D5BA' }}
								thumbColor={notificationsEnabled ? '#424242' : '#FFFFFF'}
							/>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<View
									style={{
										width: 40,
										height: 40,
										borderRadius: 20,
										backgroundColor: '#FFE082',
										justifyContent: 'center',
										alignItems: 'center',
										marginRight: 16
									}}
								>
									<Ionicons name='finger-print' size={20} color='#424242' />
								</View>
								<View>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#000000'
										}}
									>
										Biometric Login
									</Text>
									<Text style={{ fontSize: 14, color: '#757575' }}>
										Use fingerprint or face ID
									</Text>
								</View>
							</View>
							<Switch
								value={biometricEnabled}
								onValueChange={setBiometricEnabled}
								trackColor={{ false: '#E0E0E0', true: '#FFE082' }}
								thumbColor={biometricEnabled ? '#424242' : '#FFFFFF'}
							/>
						</View>
					</View>
				</View>

				{/* Settings Sections */}
				{settingsSections.map((section) => (
					<View
						key={section.title}
						style={{ paddingHorizontal: 20, marginBottom: 24 }}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: '600',
								color: '#000000',
								marginBottom: 16
							}}
						>
							{section.title}
						</Text>
						<View
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 24,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 8 },
								shadowOpacity: 0.1,
								shadowRadius: 32,
								elevation: 8
							}}
						>
							{section.items.map((item, index) => (
								<TouchableOpacity
									key={item.id}
									onPress={() => router.push(item.route as Route)}
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										padding: 20,
										borderBottomWidth:
											index === section.items.length - 1 ? 0 : 1,
										borderBottomColor: '#F5F5F5'
									}}
								>
									<View
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											flex: 1
										}}
									>
										<View
											style={{
												width: 40,
												height: 40,
												borderRadius: 20,
												backgroundColor:
													index % 2 === 0 ? '#A8D5BA' : '#FFE082',
												justifyContent: 'center',
												alignItems: 'center',
												marginRight: 16
											}}
										>
											<Ionicons
												name={item.icon as keyof typeof Ionicons.glyphMap}
												size={20}
												color='#424242'
											/>
										</View>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '600',
												color: '#000000'
											}}
										>
											{item.title}
										</Text>
									</View>
									<Ionicons name='chevron-forward' size={16} color='#757575' />
								</TouchableOpacity>
							))}
						</View>
					</View>
				))}

				{/* App Version */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
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
							elevation: 8
						}}
					>
						<View
							style={{
								width: 60,
								height: 60,
								borderRadius: 30,
								backgroundColor: '#000000',
								justifyContent: 'center',
								alignItems: 'center',
								marginBottom: 16
							}}
						>
							<Text
								style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '700' }}
							>
								E
							</Text>
						</View>
						<Text
							style={{
								fontSize: 18,
								fontWeight: '600',
								color: '#000000',
								marginBottom: 4
							}}
						>
							Better Wallet
						</Text>
						<Text style={{ fontSize: 14, color: '#757575', marginBottom: 16 }}>
							Version 1.0.0
						</Text>
						<TouchableOpacity
							style={{
								backgroundColor: '#F5F5F5',
								borderRadius: 20,
								paddingHorizontal: 20,
								paddingVertical: 8
							}}
						>
							<Text
								style={{ fontSize: 14, fontWeight: '600', color: '#424242' }}
							>
								Check for Updates
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Logout */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<TouchableOpacity
						style={{
							backgroundColor: '#F44336',
							borderRadius: 24,
							padding: 16,
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.2,
							shadowRadius: 16,
							elevation: 8
						}}
						onPress={() => {
							router.push('/(auth)/login')
						}}
					>
						<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
							Log Out
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SettingsScreen
