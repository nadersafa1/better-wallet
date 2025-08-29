import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const CreditCardsScreen = () => {
	const creditCards = [
		{
			id: '1',
			name: 'BM Bank Visa',
			number: '**** 1234',
			balance: '-$450.00',
			limit: '$5,000.00',
			available: '$4,550.00',
			dueDate: 'Mar 25, 2024',
			apr: '18.99%',
			cardType: 'visa',
			color: '#A8D5BA'
		},
		{
			id: '2',
			name: 'BM Bank Mastercard',
			number: '**** 5678',
			balance: '-$1,200.00',
			limit: '$10,000.00',
			available: '$8,800.00',
			dueDate: 'Apr 5, 2024',
			apr: '16.99%',
			cardType: 'mastercard',
			color: '#FFE082'
		},
		{
			id: '3',
			name: 'BM Bank Amex',
			number: '**** 9012',
			balance: '-$750.00',
			limit: '$15,000.00',
			available: '$14,250.00',
			dueDate: 'Mar 30, 2024',
			apr: '19.99%',
			cardType: 'amex',
			color: '#C8E6C9'
		}
	]

	const getCardIcon = (cardType: string) => {
		switch (cardType) {
			case 'visa':
				return 'card'
			case 'mastercard':
				return 'card'
			case 'amex':
				return 'card'
			default:
				return 'card'
		}
	}

	const getCardColor = (cardType: string) => {
		switch (cardType) {
			case 'visa':
				return '#1A1F71'
			case 'mastercard':
				return '#EB001B'
			case 'amex':
				return '#006FCF'
			default:
				return '#424242'
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
							Credit Cards
						</Text>
						<TouchableOpacity>
							<Ionicons name='add-circle' size={24} color='#424242' />
						</TouchableOpacity>
					</View>
				</View>

				{/* Summary Card */}
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
						<Text style={{ fontSize: 16, color: '#424242', marginBottom: 8 }}>
							Total Credit Summary
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginBottom: 16
							}}
						>
							<View>
								<Text
									style={{ fontSize: 14, color: '#757575', marginBottom: 4 }}
								>
									Total Balance
								</Text>
								<Text
									style={{ fontSize: 24, fontWeight: '700', color: '#F44336' }}
								>
									-$2,400.00
								</Text>
							</View>
							<View>
								<Text
									style={{ fontSize: 14, color: '#757575', marginBottom: 4 }}
								>
									Total Limit
								</Text>
								<Text
									style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}
								>
									$30,000.00
								</Text>
							</View>
						</View>
						<View
							style={{
								height: 8,
								backgroundColor: '#F5F5F5',
								borderRadius: 4,
								overflow: 'hidden'
							}}
						>
							<View
								style={{
									width: '8%',
									height: '100%',
									backgroundColor: '#F44336',
									borderRadius: 4
								}}
							/>
						</View>
						<Text style={{ fontSize: 12, color: '#757575', marginTop: 8 }}>
							8% of total credit limit used
						</Text>
					</View>
				</View>

				{/* Credit Cards List */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Your Credit Cards
					</Text>
					{creditCards.map((card) => (
						<TouchableOpacity
							key={card.id}
							onPress={() =>
								router.push(`/home/credit-card-details?id=${card.id}`)
							}
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 20,
								marginBottom: 12,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.06,
								shadowRadius: 8,
								elevation: 2
							}}
						>
							{/* Card Header */}
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginBottom: 16
								}}
							>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<View
										style={{
											width: 48,
											height: 48,
											borderRadius: 24,
											backgroundColor: getCardColor(card.cardType),
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 16
										}}
									>
										<Ionicons
											name={
												getCardIcon(
													card.cardType
												) as keyof typeof Ionicons.glyphMap
											}
											size={24}
											color='#FFFFFF'
										/>
									</View>
									<View>
										<Text
											style={{
												fontSize: 18,
												fontWeight: '600',
												color: '#000000',
												marginBottom: 4
											}}
										>
											{card.name}
										</Text>
										<Text style={{ fontSize: 14, color: '#757575' }}>
											{card.number}
										</Text>
									</View>
								</View>
								<Ionicons name='chevron-forward' size={16} color='#757575' />
							</View>

							{/* Card Details */}
							<View style={{ marginBottom: 16 }}>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginBottom: 8
									}}
								>
									<Text style={{ fontSize: 14, color: '#757575' }}>
										Current Balance
									</Text>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#F44336'
										}}
									>
										{card.balance}
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginBottom: 8
									}}
								>
									<Text style={{ fontSize: 14, color: '#757575' }}>
										Credit Limit
									</Text>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#000000'
										}}
									>
										{card.limit}
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginBottom: 8
									}}
								>
									<Text style={{ fontSize: 14, color: '#757575' }}>
										Available Credit
									</Text>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#4CAF50'
										}}
									>
										{card.available}
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between'
									}}
								>
									<Text style={{ fontSize: 14, color: '#757575' }}>APR</Text>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#000000'
										}}
									>
										{card.apr}
									</Text>
								</View>
							</View>

							{/* Payment Due */}
							<View
								style={{
									backgroundColor: '#FFF3E0',
									borderRadius: 12,
									padding: 12,
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center'
								}}
							>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Ionicons
										name='calendar'
										size={16}
										color='#FF9800'
										style={{ marginRight: 8 }}
									/>
									<Text
										style={{
											fontSize: 14,
											color: '#FF9800',
											fontWeight: '600'
										}}
									>
										Payment Due: {card.dueDate}
									</Text>
								</View>
								<TouchableOpacity
									style={{
										backgroundColor: '#FF9800',
										borderRadius: 16,
										paddingHorizontal: 16,
										paddingVertical: 6
									}}
								>
									<Text
										style={{
											fontSize: 12,
											fontWeight: '600',
											color: '#FFFFFF'
										}}
									>
										Pay Now
									</Text>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					))}
				</View>

				{/* Quick Actions */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Quick Actions
					</Text>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<TouchableOpacity
							style={{
								flex: 1,
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 20,
								marginRight: 8,
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
									marginBottom: 12
								}}
							>
								<Ionicons name='card' size={24} color='#424242' />
							</View>
							<Text
								style={{
									fontSize: 14,
									fontWeight: '600',
									color: '#424242',
									textAlign: 'center'
								}}
							>
								Add New Card
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flex: 1,
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 20,
								marginLeft: 8,
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
									backgroundColor: '#FFE082',
									justifyContent: 'center',
									alignItems: 'center',
									marginBottom: 12
								}}
							>
								<Ionicons name='document-text' size={24} color='#424242' />
							</View>
							<Text
								style={{
									fontSize: 14,
									fontWeight: '600',
									color: '#424242',
									textAlign: 'center'
								}}
							>
								View Statements
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default CreditCardsScreen
