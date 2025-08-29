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

const SendMoneyScreen = () => {
	const [amount, setAmount] = useState('')
	const [recipient, setRecipient] = useState('')
	const [description, setDescription] = useState('')
	const [selectedMethod, setSelectedMethod] = useState('')

	const paymentMethods = [
		{ id: 'bank', name: 'Bank Transfer', icon: 'business', color: '#A8D5BA' },
		{
			id: 'mobile',
			name: 'Mobile Money',
			icon: 'phone-portrait',
			color: '#FFE082'
		},
		{ id: 'card', name: 'Card Payment', icon: 'card', color: '#C8E6C9' }
	]

	const recentRecipients = [
		{ id: '1', name: 'John Smith', phone: '+973 1234 5678', avatar: '👤' },
		{ id: '2', name: 'Sarah Johnson', phone: '+973 9876 5432', avatar: '👤' },
		{ id: '3', name: 'Mike Wilson', phone: '+973 5555 1234', avatar: '👤' }
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
							Send Money
						</Text>
						<View style={{ width: 40 }} />
					</View>
				</View>

				{/* Send Money Form */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
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
						{/* Recipient Input */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Recipient
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
								placeholder='Enter phone number or email'
								placeholderTextColor='#757575'
								value={recipient}
								onChangeText={setRecipient}
							/>
						</View>

						{/* Amount Input */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Amount
							</Text>
							<TextInput
								style={{
									backgroundColor: '#F5F5F5',
									borderWidth: 1,
									borderColor: '#E0E0E0',
									borderRadius: 16,
									padding: 16,
									fontSize: 24,
									fontWeight: '600',
									color: '#000000',
									textAlign: 'center'
								}}
								placeholder='$0.00'
								placeholderTextColor='#757575'
								keyboardType='numeric'
								value={amount}
								onChangeText={setAmount}
							/>
						</View>

						{/* Description Input */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Description (Optional)
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
								placeholder="What's this payment for?"
								placeholderTextColor='#757575'
								value={description}
								onChangeText={setDescription}
							/>
						</View>

						{/* Payment Method */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 12
								}}
							>
								Payment Method
							</Text>
							{paymentMethods.map((method) => (
								<TouchableOpacity
									key={method.id}
									onPress={() => setSelectedMethod(method.id)}
									style={{
										backgroundColor:
											selectedMethod === method.id ? '#F5F5F5' : '#FFFFFF',
										borderRadius: 16,
										padding: 16,
										marginBottom: 8,
										flexDirection: 'row',
										alignItems: 'center',
										borderWidth: 2,
										borderColor:
											selectedMethod === method.id ? '#000000' : '#E0E0E0'
									}}
								>
									<View
										style={{
											width: 48,
											height: 48,
											borderRadius: 24,
											backgroundColor: method.color,
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 16
										}}
									>
										<Ionicons
											name={method.icon as keyof typeof Ionicons.glyphMap}
											size={24}
											color='#424242'
										/>
									</View>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#000000',
											flex: 1
										}}
									>
										{method.name}
									</Text>
									{selectedMethod === method.id && (
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

						{/* Send Button */}
						<TouchableOpacity
							disabled={!recipient || !amount || !selectedMethod}
							style={{
								backgroundColor:
									recipient && amount && selectedMethod ? '#000000' : '#E0E0E0',
								borderRadius: 24,
								padding: 16,
								alignItems: 'center',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: recipient && amount && selectedMethod ? 0.2 : 0,
								shadowRadius: 16,
								elevation: recipient && amount && selectedMethod ? 8 : 0
							}}
						>
							<Text
								style={{
									color:
										recipient && amount && selectedMethod
											? '#FFFFFF'
											: '#757575',
									fontSize: 16,
									fontWeight: '600'
								}}
							>
								Send Money
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Recent Recipients */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Recent Recipients
					</Text>
					{recentRecipients.map((contact) => (
						<TouchableOpacity
							key={contact.id}
							onPress={() => setRecipient(contact.phone)}
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 16,
								marginBottom: 8,
								flexDirection: 'row',
								alignItems: 'center',
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
									backgroundColor: '#A8D5BA',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 16
								}}
							>
								<Text style={{ fontSize: 20 }}>{contact.avatar}</Text>
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
									{contact.name}
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									{contact.phone}
								</Text>
							</View>
							<Ionicons name='chevron-forward' size={16} color='#757575' />
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SendMoneyScreen
