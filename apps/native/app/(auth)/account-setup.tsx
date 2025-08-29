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

const AccountSetupScreen = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [accountName, setAccountName] = useState('')
	const [accountNumber, setAccountNumber] = useState('')
	const [selectedAccountType, setSelectedAccountType] = useState('')
	const [initialBalance, setInitialBalance] = useState('')

	const accountTypes = [
		{
			id: 'checking',
			name: 'Checking Account',
			icon: 'wallet',
			color: '#A8D5BA',
			description: 'Daily transactions and payments'
		},
		{
			id: 'savings',
			name: 'Savings Account',
			icon: 'save',
			color: '#FFE082',
			description: 'Save money and earn interest'
		},
		{
			id: 'credit',
			name: 'Credit Card',
			icon: 'card',
			color: '#C8E6C9',
			description: 'Credit line for purchases'
		},
		{
			id: 'investment',
			name: 'Investment Account',
			icon: 'trending-up',
			color: '#FFF59D',
			description: 'Invest in stocks and bonds'
		}
	]

	const setupSteps = [
		{
			title: 'Account Type',
			subtitle: 'What type of account is this?',
			content: (
				<View>
					{accountTypes.map((type) => (
						<TouchableOpacity
							key={type.id}
							onPress={() => setSelectedAccountType(type.id)}
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 20,
								marginBottom: 12,
								flexDirection: 'row',
								alignItems: 'center',
								borderWidth: 2,
								borderColor:
									selectedAccountType === type.id ? '#000000' : 'transparent',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.06,
								shadowRadius: 8,
								elevation: 2
							}}
						>
							<View
								style={{
									width: 48,
									height: 48,
									borderRadius: 24,
									backgroundColor: type.color,
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 16
								}}
							>
								<Ionicons
									name={type.icon as keyof typeof Ionicons.glyphMap}
									size={24}
									color='#424242'
								/>
							</View>
							<View style={{ flex: 1 }}>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '600',
										color: '#000000',
										marginBottom: 4
									}}
								>
									{type.name}
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									{type.description}
								</Text>
							</View>
							{selectedAccountType === type.id && (
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
			)
		},
		{
			title: 'Account Details',
			subtitle: 'Enter your account information',
			content: (
				<View>
					<View style={{ marginBottom: 16 }}>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '600',
								color: '#424242',
								marginBottom: 8
							}}
						>
							Account Name
						</Text>
						<TextInput
							style={{
								backgroundColor: '#F5F5F5',
								borderWidth: 1,
								borderColor: '#E0E0E0',
								borderRadius: 16,
								padding: 16,
								fontSize: 16,
								color: '#424242'
							}}
							placeholder='e.g., My Daily Account'
							placeholderTextColor='#757575'
							value={accountName}
							onChangeText={setAccountName}
						/>
					</View>
					<View style={{ marginBottom: 16 }}>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '600',
								color: '#424242',
								marginBottom: 8
							}}
						>
							Account Number
						</Text>
						<TextInput
							style={{
								backgroundColor: '#F5F5F5',
								borderWidth: 1,
								borderColor: '#E0E0E0',
								borderRadius: 16,
								padding: 16,
								fontSize: 16,
								color: '#424242'
							}}
							placeholder='Enter account number'
							placeholderTextColor='#757575'
							keyboardType='numeric'
							value={accountNumber}
							onChangeText={setAccountNumber}
						/>
					</View>
					<View style={{ marginBottom: 16 }}>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '600',
								color: '#424242',
								marginBottom: 8
							}}
						>
							Initial Balance
						</Text>
						<TextInput
							style={{
								backgroundColor: '#F5F5F5',
								borderWidth: 1,
								borderColor: '#E0E0E0',
								borderRadius: 16,
								padding: 16,
								fontSize: 16,
								color: '#424242'
							}}
							placeholder='$0.00'
							placeholderTextColor='#757575'
							keyboardType='numeric'
							value={initialBalance}
							onChangeText={setInitialBalance}
						/>
					</View>
				</View>
			)
		},
		{
			title: 'Connect Bank',
			subtitle: 'Securely connect your bank account',
			content: (
				<View style={{ alignItems: 'center' }}>
					<View
						style={{
							width: 120,
							height: 120,
							borderRadius: 60,
							backgroundColor: '#A8D5BA',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: 24,
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 8 },
							shadowOpacity: 0.2,
							shadowRadius: 24,
							elevation: 8
						}}
					>
						<Ionicons name='shield-checkmark' size={60} color='#424242' />
					</View>
					<Text
						style={{
							fontSize: 18,
							fontWeight: '600',
							color: '#000000',
							textAlign: 'center',
							marginBottom: 12
						}}
					>
						Secure Connection
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: '#757575',
							textAlign: 'center',
							lineHeight: 24,
							marginBottom: 24
						}}
					>
						We use bank-level security to protect your information. Your
						credentials are never stored on our servers.
					</Text>
					<TouchableOpacity
						style={{
							backgroundColor: '#000000',
							borderRadius: 24,
							paddingHorizontal: 32,
							paddingVertical: 16,
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.2,
							shadowRadius: 16,
							elevation: 8
						}}
					>
						<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
							Connect Bank Account
						</Text>
					</TouchableOpacity>
				</View>
			)
		}
	]

	const handleNext = () => {
		if (currentStep < setupSteps.length - 1) {
			setCurrentStep(currentStep + 1)
		} else {
			// Navigate to main app
			router.replace('/(app)/home')
		}
	}

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
		} else {
			router.back()
		}
	}

	const canProceed = () => {
		switch (currentStep) {
			case 0:
				return selectedAccountType !== ''
			case 1:
				return accountName !== '' && accountNumber !== ''
			case 2:
				return true
			default:
				return false
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
						<TouchableOpacity onPress={handleBack}>
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
							Account Setup
						</Text>
						<View style={{ width: 40 }} />
					</View>
				</View>

				{/* Progress Bar */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<View
						style={{
							height: 4,
							backgroundColor: '#E0E0E0',
							borderRadius: 2,
							overflow: 'hidden'
						}}
					>
						<View
							style={{
								width: `${((currentStep + 1) / setupSteps.length) * 100}%`,
								height: '100%',
								backgroundColor: '#000000',
								borderRadius: 2
							}}
						/>
					</View>
					<Text
						style={{
							fontSize: 14,
							color: '#757575',
							marginTop: 8,
							textAlign: 'center'
						}}
					>
						Step {currentStep + 1} of {setupSteps.length}
					</Text>
				</View>

				{/* Step Content */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 28,
							fontWeight: '700',
							color: '#000000',
							marginBottom: 8,
							textAlign: 'center'
						}}
					>
						{setupSteps[currentStep].title}
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: '#424242',
							marginBottom: 32,
							textAlign: 'center'
						}}
					>
						{setupSteps[currentStep].subtitle}
					</Text>
					{setupSteps[currentStep].content}
				</View>

				{/* Action Buttons */}
				<View style={{ paddingHorizontal: 20, paddingBottom: 32 }}>
					<TouchableOpacity
						onPress={handleNext}
						disabled={!canProceed()}
						style={{
							backgroundColor: canProceed() ? '#000000' : '#E0E0E0',
							borderRadius: 24,
							padding: 16,
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: canProceed() ? 0.2 : 0,
							shadowRadius: 16,
							elevation: canProceed() ? 8 : 0
						}}
					>
						<Text
							style={{
								color: canProceed() ? '#FFFFFF' : '#757575',
								fontSize: 16,
								fontWeight: '600'
							}}
						>
							{currentStep === setupSteps.length - 1
								? 'Complete Setup'
								: 'Continue'}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AccountSetupScreen
