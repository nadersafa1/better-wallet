import { LinearGradient } from 'expo-linear-gradient'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import {
	ActivityIndicator,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Background from '@/components/background'
import { authClient } from '@/lib/auth-client'
import { queryClient } from '@/utils/trpc'

const LoginScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleLogin = async () => {
		if (!email || !password) {
			setError('Please fill in all fields')
			return
		}

		setIsLoading(true)
		setError(null)

		await authClient.signIn.email(
			{
				email,
				password
			},
			{
				onError: (error) => {
					setError(error.error?.message || 'Failed to sign in')
					setIsLoading(false)
				},
				onSuccess: () => {
					setEmail('')
					setPassword('')
					queryClient.refetchQueries()
					router.push('/(app)/home')
				},
				onFinished: () => {
					setIsLoading(false)
				}
			}
		)
	}

	return (
		<Background>
			<SafeAreaView
				style={{
					flex: 1
					// backgroundColor: '#A8D5BA'
				}}
			>
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
								elevation: 8,
								overflow: 'hidden'
							}}
						>
							<Image
								source={require('../../assets/icon.png')}
								style={{ width: 80, height: 80 }}
							/>
						</View>
						<Text
							style={{
								fontSize: 32,
								fontWeight: '700',
								color: '#000000',
								marginBottom: 8
							}}
						>
							Welcome Back
						</Text>
						<Text
							style={{ fontSize: 16, color: '#424242', textAlign: 'center' }}
						>
							Sign in to your Better Wallet account
						</Text>
					</View>

					{/* Login Form Card */}
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
						<View style={{ marginBottom: 16 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Email
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
								placeholder='Enter your email'
								placeholderTextColor='#757575'
								keyboardType='email-address'
								autoCapitalize='none'
								value={email}
								onChangeText={setEmail}
							/>
						</View>

						{/* Password Input */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Password
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
								placeholder='Enter your password'
								placeholderTextColor='#757575'
								secureTextEntry
								value={password}
								onChangeText={setPassword}
							/>
						</View>

						{/* Login Button */}
						<TouchableOpacity onPress={handleLogin} disabled={isLoading}>
							<LinearGradient
								colors={['#000000', '#424242']}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 1 }} // 135deg equivalent
								style={{
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
										Sign In
									</Text>
								)}
							</LinearGradient>
						</TouchableOpacity>

						{/* Forgot Password */}
						<Link href='/forgot-password' asChild>
							<TouchableOpacity style={{ alignItems: 'center', marginTop: 16 }}>
								<Text style={{ color: '#424242', fontSize: 14 }}>
									Forgot Password?
								</Text>
							</TouchableOpacity>
						</Link>
					</View>

					{/* Sign Up Link */}
					<View style={{ alignItems: 'center', marginTop: 24 }}>
						<Text style={{ color: '#424242', fontSize: 14 }}>
							Don't have an account?{' '}
						</Text>
						<Link href='/register' asChild>
							<TouchableOpacity>
								<Text
									style={{ color: '#000000', fontSize: 14, fontWeight: '600' }}
								>
									Sign Up
								</Text>
							</TouchableOpacity>
						</Link>
					</View>
				</View>
			</SafeAreaView>
		</Background>
	)
}

export default LoginScreen
