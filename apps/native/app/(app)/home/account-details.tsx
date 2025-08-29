import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const AccountDetailsScreen = () => {
	const account = {
		id: '1',
		name: 'Daily Account',
		balance: '$2,150.00',
		type: 'checking',
		number: '****1234',
		accountNumber: '1234567890',
		routingNumber: '021000021',
		transactions: [
			{
				id: '1',
				description: 'Grocery Store',
				amount: '-$75.50',
				date: 'Mar 15, 2024',
				category: 'Food & Dining',
				type: 'expense'
			},
			{
				id: '2',
				description: 'Salary Deposit',
				amount: '+$3,500.00',
				date: 'Mar 1, 2024',
				category: 'Income',
				type: 'income'
			},
			{
				id: '3',
				description: 'Gas Station',
				amount: '-$45.00',
				date: 'Mar 14, 2024',
				category: 'Transportation',
				type: 'expense'
			}
		]
	}

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
							Account Details
						</Text>
						<TouchableOpacity>
							<Ionicons name='ellipsis-vertical' size={20} color='#424242' />
						</TouchableOpacity>
					</View>
				</View>

				{/* Account Summary */}
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
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginBottom: 20
							}}
						>
							<View
								style={{
									width: 60,
									height: 60,
									borderRadius: 30,
									backgroundColor: getAccountColor(account.type),
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 16
								}}
							>
								<Ionicons
									name={getAccountIcon(account.type)}
									size={30}
									color='#424242'
								/>
							</View>
							<View style={{ flex: 1 }}>
								<Text
									style={{
										fontSize: 20,
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
						</View>

						<View style={{ marginBottom: 20 }}>
							<Text style={{ fontSize: 14, color: '#757575', marginBottom: 4 }}>
								Current Balance
							</Text>
							<Text
								style={{ fontSize: 32, fontWeight: '700', color: '#000000' }}
							>
								{account.balance}
							</Text>
						</View>

						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<TouchableOpacity
								style={{
									flex: 1,
									backgroundColor: '#A8D5BA',
									borderRadius: 16,
									padding: 12,
									marginRight: 8,
									alignItems: 'center'
								}}
							>
								<Ionicons name='arrow-up' size={20} color='#424242' />
								<Text
									style={{
										fontSize: 12,
										fontWeight: '600',
										color: '#424242',
										marginTop: 4
									}}
								>
									Send
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flex: 1,
									backgroundColor: '#FFE082',
									borderRadius: 16,
									padding: 12,
									marginLeft: 8,
									alignItems: 'center'
								}}
							>
								<Ionicons name='arrow-down' size={20} color='#424242' />
								<Text
									style={{
										fontSize: 12,
										fontWeight: '600',
										color: '#424242',
										marginTop: 4
									}}
								>
									Request
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				{/* Account Information */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Account Information
					</Text>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							borderRadius: 16,
							padding: 20,
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.06,
							shadowRadius: 8,
							elevation: 2
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginBottom: 12
							}}
						>
							<Text style={{ fontSize: 14, color: '#757575' }}>
								Account Number
							</Text>
							<Text
								style={{ fontSize: 14, fontWeight: '600', color: '#000000' }}
							>
								{account.accountNumber}
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginBottom: 12
							}}
						>
							<Text style={{ fontSize: 14, color: '#757575' }}>
								Routing Number
							</Text>
							<Text
								style={{ fontSize: 14, fontWeight: '600', color: '#000000' }}
							>
								{account.routingNumber}
							</Text>
						</View>
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<Text style={{ fontSize: 14, color: '#757575' }}>
								Account Type
							</Text>
							<Text
								style={{ fontSize: 14, fontWeight: '600', color: '#000000' }}
							>
								{account.type.charAt(0).toUpperCase() + account.type.slice(1)}
							</Text>
						</View>
					</View>
				</View>

				{/* Recent Transactions */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: 16
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: '600', color: '#000000' }}>
							Recent Transactions
						</Text>
						<TouchableOpacity onPress={() => router.push('/home/transactions')}>
							<Text
								style={{ fontSize: 14, color: '#424242', fontWeight: '600' }}
							>
								View All
							</Text>
						</TouchableOpacity>
					</View>
					{account.transactions.map((transaction) => (
						<TouchableOpacity
							key={transaction.id}
							onPress={() =>
								router.push(`/home/transaction-details?id=${transaction.id}`)
							}
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
									width: 40,
									height: 40,
									borderRadius: 20,
									backgroundColor:
										transaction.type === 'income' ? '#A8D5BA' : '#FFE082',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 12
								}}
							>
								<Ionicons
									name={
										transaction.type === 'income' ? 'arrow-up' : 'arrow-down'
									}
									size={20}
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
									{transaction.description}
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									{transaction.date} • {transaction.category}
								</Text>
							</View>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: transaction.type === 'income' ? '#4CAF50' : '#F44336'
								}}
							>
								{transaction.amount}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AccountDetailsScreen
