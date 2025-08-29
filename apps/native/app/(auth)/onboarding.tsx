import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Background from '@/components/background'

const OnboardingScreen = () => {
	const [currentStep, setCurrentStep] = useState(0)

	const onboardingSteps = [
		{
			title: 'Welcome to Better Wallet',
			subtitle: 'Your personal finance companion',
			description:
				'Take control of your money with smart budgeting, expense tracking, and financial insights.',
			icon: 'wallet',
			color: '#fef3c7'
		},
		{
			title: 'Track Everything',
			subtitle: 'Income, expenses, and transfers',
			description:
				'Easily log your income and expenses with quick entry and smart categorization.',
			icon: 'trending-up',
			color: '#FFE082'
		},
		{
			title: 'Smart Analytics',
			subtitle: 'Understand your spending',
			description:
				'Get insights into your spending patterns and discover ways to save more money.',
			icon: 'analytics',
			color: '#C8E6C9'
		},
		{
			title: 'Secure & Private',
			subtitle: 'Your data is protected',
			description:
				'Bank-level security ensures your financial information stays private and secure.',
			icon: 'shield-checkmark',
			color: '#FFF59D'
		}
	]

	const handleNext = () => {
		if (currentStep < onboardingSteps.length - 1) {
			setCurrentStep(currentStep + 1)
		} else {
			router.push('/login')
		}
	}

	const handleSkip = () => {
		router.push('/login')
	}

	return (
		<Background>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					{/* Skip Button */}
					<View style={{ padding: 20, alignItems: 'flex-end' }}>
						<TouchableOpacity onPress={handleSkip}>
							<Text
								style={{ fontSize: 16, fontWeight: '600', color: '#424242' }}
							>
								Skip
							</Text>
						</TouchableOpacity>
					</View>

					{/* Content */}
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							paddingHorizontal: 40
						}}
					>
						{/* Icon */}
						<View
							style={{
								width: 120,
								height: 120,
								borderRadius: 60,
								backgroundColor: onboardingSteps[currentStep].color,
								justifyContent: 'center',
								alignItems: 'center',
								marginBottom: 40,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 8 },
								shadowOpacity: 0.2,
								shadowRadius: 24,
								elevation: 8
							}}
						>
							<Ionicons
								name={
									onboardingSteps[currentStep]
										.icon as keyof typeof Ionicons.glyphMap
								}
								size={60}
								color='#424242'
							/>
						</View>

						{/* Text Content */}
						<Text
							style={{
								fontSize: 32,
								fontWeight: '700',
								color: '#000000',
								textAlign: 'center',
								marginBottom: 12
							}}
						>
							{onboardingSteps[currentStep].title}
						</Text>
						<Text
							style={{
								fontSize: 18,
								fontWeight: '600',
								color: '#424242',
								textAlign: 'center',
								marginBottom: 24
							}}
						>
							{onboardingSteps[currentStep].subtitle}
						</Text>
						<Text
							style={{
								fontSize: 16,
								color: '#757575',
								textAlign: 'center',
								lineHeight: 24
							}}
						>
							{onboardingSteps[currentStep].description}
						</Text>
					</View>

					{/* Progress Dots */}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							marginBottom: 40
						}}
					>
						{onboardingSteps.map((step, index) => (
							<View
								key={step.title}
								style={{
									width: index === currentStep ? 24 : 8,
									height: 8,
									borderRadius: 4,
									backgroundColor:
										index === currentStep ? '#000000' : '#E0E0E0',
									marginHorizontal: 4
								}}
							/>
						))}
					</View>

					{/* Action Buttons */}
					<View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
						<TouchableOpacity
							onPress={handleNext}
							style={{
								backgroundColor: '#000000',
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
								{currentStep === onboardingSteps.length - 1
									? 'Get Started'
									: 'Next'}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</Background>
	)
}

export default OnboardingScreen
