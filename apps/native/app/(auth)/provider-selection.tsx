import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'

const ProviderSelectionScreen = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedProvider, setSelectedProvider] = useState('')

	const providers = [
		{
			id: '1',
			name: 'BM Bank',
			description: "Bahrain's leading digital bank",
			logo: '🏦',
			color: '#A8D5BA',
			popular: true
		},
		{
			id: '2',
			name: 'National Bank of Bahrain',
			description: 'Traditional banking with modern solutions',
			logo: '🏛️',
			color: '#FFE082',
			popular: false
		},
		{
			id: '3',
			name: 'Ahli United Bank',
			description: 'International banking services',
			logo: '🌍',
			color: '#C8E6C9',
			popular: false
		},
		{
			id: '4',
			name: 'KFH Bahrain',
			description: 'Islamic banking solutions',
			logo: '☪️',
			color: '#FFF59D',
			popular: false
		},
		{
			id: '5',
			name: 'Standard Chartered',
			description: 'Global banking network',
			logo: '🌐',
			color: '#A8D5BA',
			popular: false
		}
	]

	const filteredProviders = providers.filter(
		(provider) =>
			provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			provider.description.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const handleContinue = () => {
		if (selectedProvider) {
			router.push('/account-setup')
		}
	}

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
							Choose Your Bank
						</Text>
						<View style={{ width: 40 }} />
					</View>
				</View>

				{/* Search Bar */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							borderRadius: 16,
							paddingHorizontal: 16,
							paddingVertical: 12,
							flexDirection: 'row',
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.06,
							shadowRadius: 8,
							elevation: 2
						}}
					>
						<Ionicons
							name='search'
							size={20}
							color='#757575'
							style={{ marginRight: 12 }}
						/>
						<TextInput
							style={{ flex: 1, fontSize: 16, color: '#424242' }}
							placeholder='Search for your bank...'
							placeholderTextColor='#757575'
							value={searchQuery}
							onChangeText={setSearchQuery}
						/>
					</View>
				</View>

				{/* Popular Providers */}
				{filteredProviders.some((p) => p.popular) && (
					<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: '600',
								color: '#000000',
								marginBottom: 16
							}}
						>
							Popular Banks
						</Text>
						{filteredProviders
							.filter((p) => p.popular)
							.map((provider) => (
								<TouchableOpacity
									key={provider.id}
									onPress={() => setSelectedProvider(provider.id)}
									style={{
										backgroundColor: '#FFFFFF',
										borderRadius: 16,
										padding: 20,
										marginBottom: 12,
										flexDirection: 'row',
										alignItems: 'center',
										borderWidth: 2,
										borderColor:
											selectedProvider === provider.id
												? '#000000'
												: 'transparent',
										shadowColor: '#000',
										shadowOffset: { width: 0, height: 2 },
										shadowOpacity: 0.06,
										shadowRadius: 8,
										elevation: 2
									}}
								>
									<View
										style={{
											width: 60,
											height: 60,
											borderRadius: 30,
											backgroundColor: provider.color,
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 16
										}}
									>
										<Text style={{ fontSize: 24 }}>{provider.logo}</Text>
									</View>
									<View style={{ flex: 1 }}>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												marginBottom: 4
											}}
										>
											<Text
												style={{
													fontSize: 18,
													fontWeight: '600',
													color: '#000000'
												}}
											>
												{provider.name}
											</Text>
											<View
												style={{
													backgroundColor: '#FFE082',
													borderRadius: 8,
													paddingHorizontal: 8,
													paddingVertical: 2,
													marginLeft: 8
												}}
											>
												<Text
													style={{
														fontSize: 10,
														fontWeight: '600',
														color: '#424242'
													}}
												>
													POPULAR
												</Text>
											</View>
										</View>
										<Text style={{ fontSize: 14, color: '#757575' }}>
											{provider.description}
										</Text>
									</View>
									{selectedProvider === provider.id && (
										<View
											style={{
												width: 24,
												height: 24,
												borderRadius: 12,
												backgroundColor: '#000000',
												justifyContent: 'center',
												alignItems: 'center'
											}}
										>
											<Ionicons name='checkmark' size={16} color='#FFFFFF' />
										</View>
									)}
								</TouchableOpacity>
							))}
					</View>
				)}

				{/* All Providers */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						All Banks
					</Text>
					{filteredProviders.map((provider) => (
						<TouchableOpacity
							key={provider.id}
							onPress={() => setSelectedProvider(provider.id)}
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 20,
								marginBottom: 12,
								flexDirection: 'row',
								alignItems: 'center',
								borderWidth: 2,
								borderColor:
									selectedProvider === provider.id ? '#000000' : 'transparent',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.06,
								shadowRadius: 8,
								elevation: 2
							}}
						>
							<View
								style={{
									width: 60,
									height: 60,
									borderRadius: 30,
									backgroundColor: provider.color,
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 16
								}}
							>
								<Text style={{ fontSize: 24 }}>{provider.logo}</Text>
							</View>
							<View style={{ flex: 1 }}>
								<Text
									style={{
										fontSize: 18,
										fontWeight: '600',
										color: '#000000',
										marginBottom: 4
									}}
								>
									{provider.name}
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									{provider.description}
								</Text>
							</View>
							{selectedProvider === provider.id && (
								<View
									style={{
										width: 24,
										height: 24,
										borderRadius: 12,
										backgroundColor: '#000000',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Ionicons name='checkmark' size={16} color='#FFFFFF' />
								</View>
							)}
						</TouchableOpacity>
					))}
				</View>

				{/* Continue Button */}
				<View style={{ paddingHorizontal: 20, paddingBottom: 32 }}>
					<TouchableOpacity
						onPress={handleContinue}
						disabled={!selectedProvider}
						style={{
							backgroundColor: selectedProvider ? '#000000' : '#E0E0E0',
							borderRadius: 24,
							padding: 16,
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: selectedProvider ? 0.2 : 0,
							shadowRadius: 16,
							elevation: selectedProvider ? 8 : 0
						}}
					>
						<Text
							style={{
								color: selectedProvider ? '#FFFFFF' : '#757575',
								fontSize: 16,
								fontWeight: '600'
							}}
						>
							Continue
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ProviderSelectionScreen
