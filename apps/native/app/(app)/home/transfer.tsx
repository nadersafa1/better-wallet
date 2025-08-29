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

const TransferScreen = () => {
	const [amount, setAmount] = useState('')
	const [selectedFromAccount, setSelectedFromAccount] = useState('')
	const [selectedToAccount, setSelectedToAccount] = useState('')
	const [description, setDescription] = useState('')

	const accounts = [
		{
			id: '1',
			name: 'Daily Account',
			balance: '$2,150.00',
			type: 'checking',
			number: '****1234'
		},
		{
			id: '2',
			name: 'Savings',
			balance: '$1,350.00',
			type: 'savings',
			number: '****5678'
		},
		{
			id: '3',
			name: 'Credit Card',
			balance: '-$450.00',
			type: 'credit',
			number: '****9012'
		}
	]

	const getAccountIcon = (type: string) => {
		switch (type) {
			case 'checking':
				return 'wallet'
			case 'savings':
				return 'save'
			case 'credit':
				return 'card'
			default:
				return 'wallet'
		}
	}

	const getAccountColor = (type: string) => {
		switch (type) {
			case 'checking':
				return '#A8D5BA'
			case 'savings':
				return '#FFE082'
			case 'credit':
				return '#C8E6C9'
			default:
				return '#A8D5BA'
		}
	}

	const handleTransfer = () => {
		// Handle transfer logic here
		router.push('/home/payment-history')
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
							Transfer Money
						</Text>
						<View style={{ width: 40 }} />
					</View>
				</View>

				{/* Transfer Form */}
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
						{/* From Account */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 12
								}}
							>
								From Account
							</Text>
							{accounts.map((account) => (
								<TouchableOpacity
									key={account.id}
									onPress={() => setSelectedFromAccount(account.id)}
									style={{
										backgroundColor:
											selectedFromAccount === account.id
												? '#F5F5F5'
												: '#FFFFFF',
										borderRadius: 16,
										padding: 16,
										marginBottom: 8,
										flexDirection: 'row',
										alignItems: 'center',
										borderWidth: 2,
										borderColor:
											selectedFromAccount === account.id ? '#000000' : '#E0E0E0'
									}}
								>
									<View
										style={{
											width: 48,
											height: 48,
											borderRadius: 24,
											backgroundColor: getAccountColor(account.type),
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 16
										}}
									>
										<Ionicons
											name={getAccountIcon(account.type)}
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
											{account.name}
										</Text>
										<Text style={{ fontSize: 14, color: '#757575' }}>
											{account.number}
										</Text>
									</View>
									<View style={{ alignItems: 'flex-end' }}>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '600',
												color: '#000000',
												marginBottom: 4
											}}
										>
											{account.balance}
										</Text>
										{selectedFromAccount === account.id && (
											<View
												style={{
													width: 20,
													height: 20,
													borderRadius: 10,
													backgroundColor: '#000000',
													justifyContent: 'center',
													alignItems: 'center'
												}}
											>
												<Ionicons name='checkmark' size={12} color='#FFFFFF' />
											</View>
										)}
									</View>
								</TouchableOpacity>
							))}
						</View>

						{/* Transfer Arrow */}
						<View style={{ alignItems: 'center', marginBottom: 24 }}>
							<View
								style={{
									width: 48,
									height: 48,
									borderRadius: 24,
									backgroundColor: '#A8D5BA',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Ionicons name='arrow-down' size={24} color='#424242' />
							</View>
						</View>

						{/* To Account */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 12
								}}
							>
								To Account
							</Text>
							{accounts.map((account) => (
								<TouchableOpacity
									key={account.id}
									onPress={() => setSelectedToAccount(account.id)}
									style={{
										backgroundColor:
											selectedToAccount === account.id ? '#F5F5F5' : '#FFFFFF',
										borderRadius: 16,
										padding: 16,
										marginBottom: 8,
										flexDirection: 'row',
										alignItems: 'center',
										borderWidth: 2,
										borderColor:
											selectedToAccount === account.id ? '#000000' : '#E0E0E0'
									}}
								>
									<View
										style={{
											width: 48,
											height: 48,
											borderRadius: 24,
											backgroundColor: getAccountColor(account.type),
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 16
										}}
									>
										<Ionicons
											name={getAccountIcon(account.type)}
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
											{account.name}
										</Text>
										<Text style={{ fontSize: 14, color: '#757575' }}>
											{account.number}
										</Text>
									</View>
									<View style={{ alignItems: 'flex-end' }}>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '600',
												color: '#000000',
												marginBottom: 4
											}}
										>
											{account.balance}
										</Text>
										{selectedToAccount === account.id && (
											<View
												style={{
													width: 20,
													height: 20,
													borderRadius: 10,
													backgroundColor: '#000000',
													justifyContent: 'center',
													alignItems: 'center'
												}}
											>
												<Ionicons name='checkmark' size={12} color='#FFFFFF' />
											</View>
										)}
									</View>
								</TouchableOpacity>
							))}
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
								placeholder="What's this transfer for?"
								placeholderTextColor='#757575'
								value={description}
								onChangeText={setDescription}
							/>
						</View>

						{/* Transfer Button */}
						<TouchableOpacity
							onPress={handleTransfer}
							disabled={
								!selectedFromAccount ||
								!selectedToAccount ||
								!amount ||
								selectedFromAccount === selectedToAccount
							}
							style={{
								backgroundColor:
									selectedFromAccount &&
									selectedToAccount &&
									amount &&
									selectedFromAccount !== selectedToAccount
										? '#000000'
										: '#E0E0E0',
								borderRadius: 24,
								padding: 16,
								alignItems: 'center',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity:
									selectedFromAccount &&
									selectedToAccount &&
									amount &&
									selectedFromAccount !== selectedToAccount
										? 0.2
										: 0,
								shadowRadius: 16,
								elevation:
									selectedFromAccount &&
									selectedToAccount &&
									amount &&
									selectedFromAccount !== selectedToAccount
										? 8
										: 0
							}}
						>
							<Text
								style={{
									color:
										selectedFromAccount &&
										selectedToAccount &&
										amount &&
										selectedFromAccount !== selectedToAccount
											? '#FFFFFF'
											: '#757575',
									fontSize: 16,
									fontWeight: '600'
								}}
							>
								Transfer Money
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Quick Transfer Options */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Quick Transfer Amounts
					</Text>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						{['$50', '$100', '$200', '$500'].map((quickAmount) => (
							<TouchableOpacity
								key={quickAmount}
								onPress={() => setAmount(quickAmount)}
								style={{
									flex: 1,
									backgroundColor: '#FFFFFF',
									borderRadius: 16,
									padding: 16,
									marginHorizontal: 4,
									alignItems: 'center',
									shadowColor: '#000',
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.06,
									shadowRadius: 8,
									elevation: 2
								}}
							>
								<Text
									style={{ fontSize: 16, fontWeight: '600', color: '#424242' }}
								>
									{quickAmount}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default TransferScreen
