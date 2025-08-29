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

const TransactionsScreen = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedFilter, setSelectedFilter] = useState('all')

	const filters = [
		{ id: 'all', label: 'All' },
		{ id: 'income', label: 'Income' },
		{ id: 'expense', label: 'Expense' },
		{ id: 'transfer', label: 'Transfer' }
	]

	const transactions = [
		{
			id: '1',
			description: 'Grocery Store',
			amount: '-$75.50',
			date: 'Today',
			category: 'Food',
			type: 'expense',
			account: 'Daily Account'
		},
		{
			id: '2',
			description: 'Salary Deposit',
			amount: '+$2,500.00',
			date: 'Yesterday',
			category: 'Income',
			type: 'income',
			account: 'Daily Account'
		},
		{
			id: '3',
			description: 'Gas Station',
			amount: '-$45.00',
			date: 'Mar 14',
			category: 'Transport',
			type: 'expense',
			account: 'Daily Account'
		},
		{
			id: '4',
			description: 'Transfer to Savings',
			amount: '-$500.00',
			date: 'Mar 13',
			category: 'Transfer',
			type: 'transfer',
			account: 'Daily Account'
		},
		{
			id: '5',
			description: 'Coffee Shop',
			amount: '-$12.50',
			date: 'Mar 12',
			category: 'Food',
			type: 'expense',
			account: 'Daily Account'
		},
		{
			id: '6',
			description: 'Freelance Payment',
			amount: '+$750.00',
			date: 'Mar 11',
			category: 'Income',
			type: 'income',
			account: 'Daily Account'
		}
	]

	const getCategoryIcon = (category: string) => {
		switch (category) {
			case 'Food':
				return 'restaurant'
			case 'Transport':
				return 'car'
			case 'Income':
				return 'trending-up'
			case 'Transfer':
				return 'swap-horizontal'
			case 'Shopping':
				return 'bag'
			case 'Bills':
				return 'receipt'
			default:
				return 'ellipsis-horizontal'
		}
	}

	const getCategoryColor = (category: string) => {
		switch (category) {
			case 'Food':
				return '#A8D5BA'
			case 'Transport':
				return '#FFE082'
			case 'Income':
				return '#C8E6C9'
			case 'Transfer':
				return '#FFF59D'
			case 'Shopping':
				return '#A8D5BA'
			case 'Bills':
				return '#FFE082'
			default:
				return '#C8E6C9'
		}
	}

	const filteredTransactions = transactions.filter((transaction) => {
		const matchesSearch =
			transaction.description
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			transaction.category.toLowerCase().includes(searchQuery.toLowerCase())
		const matchesFilter =
			selectedFilter === 'all' || transaction.type === selectedFilter
		return matchesSearch && matchesFilter
	})

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
							Transactions
						</Text>
						<TouchableOpacity>
							<Ionicons name='filter' size={24} color='#424242' />
						</TouchableOpacity>
					</View>
				</View>

				{/* Search Bar */}
				<View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
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
							placeholder='Search transactions...'
							placeholderTextColor='#757575'
							value={searchQuery}
							onChangeText={setSearchQuery}
						/>
					</View>
				</View>

				{/* Filter Tabs */}
				<View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{filters.map((filter) => (
							<TouchableOpacity
								key={filter.id}
								onPress={() => setSelectedFilter(filter.id)}
								style={{
									backgroundColor:
										selectedFilter === filter.id ? '#000000' : '#FFFFFF',
									borderRadius: 20,
									paddingHorizontal: 20,
									paddingVertical: 8,
									marginRight: 12,
									shadowColor: '#000',
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.06,
									shadowRadius: 8,
									elevation: 2
								}}
							>
								<Text
									style={{
										fontSize: 14,
										fontWeight: '600',
										color: selectedFilter === filter.id ? '#FFFFFF' : '#424242'
									}}
								>
									{filter.label}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>

				{/* Transactions List */}
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
							All Transactions
						</Text>
						<Text style={{ fontSize: 14, color: '#757575' }}>
							{filteredTransactions.length} transactions
						</Text>
					</View>
					{filteredTransactions.map((transaction) => (
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
									alignItems: 'center'
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
											width: 48,
											height: 48,
											borderRadius: 24,
											backgroundColor: getCategoryColor(transaction.category),
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: 16
										}}
									>
										<Ionicons
											name={getCategoryIcon(transaction.category)}
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
											{transaction.description}
										</Text>
										<Text
											style={{
												fontSize: 14,
												color: '#757575',
												marginBottom: 2
											}}
										>
											{transaction.date} • {transaction.category}
										</Text>
										<Text style={{ fontSize: 12, color: '#757575' }}>
											{transaction.account}
										</Text>
									</View>
								</View>
								<View style={{ alignItems: 'flex-end' }}>
									<Text
										style={{
											fontSize: 18,
											fontWeight: '600',
											color: transaction.amount.startsWith('+')
												? '#4CAF50'
												: transaction.amount.startsWith('-')
													? '#F44336'
													: '#000000',
											marginBottom: 4
										}}
									>
										{transaction.amount}
									</Text>
									<Ionicons name='chevron-forward' size={16} color='#757575' />
								</View>
							</View>
						</TouchableOpacity>
					))}
				</View>

				{/* Load More */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<TouchableOpacity
						style={{
							backgroundColor: '#FFFFFF',
							borderRadius: 16,
							padding: 16,
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.06,
							shadowRadius: 8,
							elevation: 2
						}}
					>
						<Text style={{ fontSize: 16, fontWeight: '600', color: '#424242' }}>
							Load More Transactions
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default TransactionsScreen
