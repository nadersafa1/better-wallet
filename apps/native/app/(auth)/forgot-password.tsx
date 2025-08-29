import { Ionicons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import {
	ActivityIndicator,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Background from '@/components/background'

const ForgotPasswordScreen = () => {
	const [email, setEmail] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState(false)

	const handleResetPassword = async () => {
		if (!email) {
			setError('Please enter your email address')
			return
		}

		setIsLoading(true)
		setError(null)

		// TODO: Implement actual password reset functionality
		// For now, simulate success after a delay
		setTimeout(() => {
			setSuccess(true)
			setEmail('')
			setIsLoading(false)
		}, 2000)
	}

	if (success) {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#A8D5BA' }}>
				<View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
					{/* Header */}
					<View style={{ alignItems: 'center', marginBottom: 48 }}>
						<View
							style={{
								width: 80,
								height: 80,
								borderRadius: 40,
								backgroundColor: '#10B981',
								justifyContent: 'center',
								alignItems: 'center',
								marginBottom: 16,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.2,
								shadowRadius: 16,
								elevation: 8
							}}
						>
							<Ionicons name='checkmark' size={40} color='#FFFFFF' />
						</View>
						<Text
							style={{
								fontSize: 32,
								fontWeight: '700',
								color: '#000000',
								marginBottom: 8
							}}
						>
							Check Your Email
						</Text>
						<Text
							style={{ fontSize: 16, color: '#424242', textAlign: 'center' }}
						>
							We've sent you a password reset link
						</Text>
					</View>

					{/* Success Card */}
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
							marginBottom: 24
						}}
					>
						<Text
							style={{
								fontSize: 16,
								color: '#424242',
								textAlign: 'center',
								lineHeight: 24
							}}
						>
							We've sent a password reset link to your email address. Please
							check your inbox and follow the instructions to reset your
							password.
						</Text>
					</View>

					{/* Back to Login Button */}
					<TouchableOpacity
						onPress={() => router.push('/(auth)/login')}
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
						<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
							Back to Sign In
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		)
	}

	return (
		<Background>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
					{/* Header */}
					<View style={{ alignItems: 'center', marginBottom: 48 }}>
						<View
							style={{
								width: 80,
								height: 80,
								borderRadius: 40,
								backgroundColor: '#000000',
								justifyContent: 'center',
								alignItems: 'center',
								marginBottom: 16,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.2,
								shadowRadius: 16,
								elevation: 8
							}}
						>
							<Text
								style={{ color: '#FFFFFF', fontSize: 32, fontWeight: '700' }}
							>
								E
							</Text>
						</View>
						<Text
							style={{
								fontSize: 32,
								fontWeight: '700',
								color: '#000000',
								marginBottom: 8
							}}
						>
							Forgot Password?
						</Text>
						<Text
							style={{ fontSize: 16, color: '#424242', textAlign: 'center' }}
						>
							Enter your email to reset your password
						</Text>
					</View>

					{/* Reset Form Card */}
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
						{/* Error Message */}
						{error && (
							<View
								style={{
									backgroundColor: '#FEE2E2',
									borderRadius: 12,
									padding: 12,
									marginBottom: 16,
									borderWidth: 1,
									borderColor: '#FCA5A5'
								}}
							>
								<Text style={{ color: '#DC2626', fontSize: 14 }}>{error}</Text>
							</View>
						)}

						{/* Email Input */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Email Address
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
								placeholder='Enter your email address'
								placeholderTextColor='#757575'
								keyboardType='email-address'
								autoCapitalize='none'
								value={email}
								onChangeText={setEmail}
							/>
						</View>

						{/* Reset Button */}
						<TouchableOpacity
							onPress={handleResetPassword}
							disabled={isLoading}
						>
							<View
								style={{
									backgroundColor: '#000000',
									borderRadius: 24,
									padding: 16,
									alignItems: 'center',
									shadowColor: '#000',
									shadowOffset: { width: 0, height: 4 },
									shadowOpacity: 0.2,
									shadowRadius: 16,
									elevation: 8,
									opacity: isLoading ? 0.7 : 1
								}}
							>
								{isLoading ? (
									<ActivityIndicator size='small' color='#FFFFFF' />
								) : (
									<Text
										style={{
											color: '#FFFFFF',
											fontSize: 16,
											fontWeight: '600'
										}}
									>
										Send Reset Link
									</Text>
								)}
							</View>
						</TouchableOpacity>

						{/* Help Text */}
						<Text
							style={{
								color: '#757575',
								fontSize: 14,
								textAlign: 'center',
								marginTop: 16,
								lineHeight: 20
							}}
						>
							We'll send you an email with a link to reset your password. Make
							sure to check your spam folder if you don't see it in your inbox.
						</Text>
					</View>

					{/* Back to Login Link */}
					<View style={{ alignItems: 'center', marginTop: 24 }}>
						<Text style={{ color: '#424242', fontSize: 14 }}>
							Remember your password?{' '}
						</Text>
						<Link href='/login' asChild>
							<TouchableOpacity>
								<Text
									style={{ color: '#000000', fontSize: 14, fontWeight: '600' }}
								>
									Sign In
								</Text>
							</TouchableOpacity>
						</Link>
					</View>
				</View>
			</SafeAreaView>
		</Background>
	)
}

export default ForgotPasswordScreen
