import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import Background from '@/components/background'

const ExpenseScreen = () => {
	const [amount, setAmount] = useState('')
	const [description, setDescription] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('')

	const expenseCategories = [
		{ id: '1', name: 'Food', icon: 'restaurant', color: '#A8D5BA' },
		{ id: '2', name: 'Transport', icon: 'car', color: '#FFE082' },
		{ id: '3', name: 'Shopping', icon: 'bag', color: '#C8E6C9' },
		{ id: '4', name: 'Bills', icon: 'receipt', color: '#FFF59D' },
		{
			id: '5',
			name: 'Entertainment',
			icon: 'game-controller',
			color: '#A8D5BA'
		},
		{ id: '6', name: 'Health', icon: 'medical', color: '#FFE082' },
		{ id: '7', name: 'Education', icon: 'school', color: '#C8E6C9' },
		{ id: '8', name: 'Other', icon: 'ellipsis-horizontal', color: '#FFF59D' }
	]

	const recentExpenses = [
		{
			id: '1',
			description: 'Grocery Store',
			amount: '-$75.50',
			date: 'Today',
			category: 'Food'
		},
		{
			id: '2',
			description: 'Gas Station',
			amount: '-$45.00',
			date: 'Yesterday',
			category: 'Transport'
		},
		{
			id: '3',
			description: 'Coffee Shop',
			amount: '-$12.50',
			date: 'Mar 14',
			category: 'Food'
		},
		{
			id: '4',
			description: 'Movie Tickets',
			amount: '-$28.00',
			date: 'Mar 13',
			category: 'Entertainment'
		}
	]

	return (
			<Background
			>
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
						<Text style={{ fontSize: 32, fontWeight: '700', color: '#000000' }}>
							Add Expense
						</Text>
						<TouchableOpacity>
							<Ionicons
								name='notifications-outline'
								size={24}
								color='#424242'
							/>
						</TouchableOpacity>
					</View>
				</View>

				{/* Quick Expense Entry Card */}
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
						<Text
							style={{
								fontSize: 20,
								fontWeight: '600',
								color: '#000000',
								marginBottom: 16
							}}
						>
							Quick Expense Entry
						</Text>

						{/* Amount Input */}
						<View style={{ marginBottom: 16 }}>
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
						<View style={{ marginBottom: 16 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Description
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
								placeholder='What did you spend on?'
								placeholderTextColor='#757575'
								value={description}
								onChangeText={setDescription}
							/>
						</View>

						{/* Category Selection */}
						<View style={{ marginBottom: 24 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#424242',
									marginBottom: 8
								}}
							>
								Category
							</Text>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
								{expenseCategories.map((category) => (
									<TouchableOpacity
										key={category.id}
										onPress={() => setSelectedCategory(category.id)}
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											backgroundColor:
												selectedCategory === category.id
													? category.color
													: '#F5F5F5',
											borderRadius: 20,
											paddingHorizontal: 16,
											paddingVertical: 8,
											marginBottom: 8
										}}
									>
										<Ionicons
											name={category.icon as keyof typeof Ionicons.glyphMap}
											size={16}
											color={
												selectedCategory === category.id ? '#424242' : '#757575'
											}
											style={{ marginRight: 8 }}
										/>
										<Text
											style={{
												fontSize: 14,
												fontWeight: '600',
												color:
													selectedCategory === category.id
														? '#424242'
														: '#757575'
											}}
										>
											{category.name}
										</Text>
									</TouchableOpacity>
								))}
							</View>
						</View>

						{/* Add Expense Button */}
						<TouchableOpacity
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
								Add Expense
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Recent Expenses */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Recent Expenses
					</Text>
					{recentExpenses.map((expense) => (
						<TouchableOpacity
							key={expense.id}
							style={{
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 16,
								marginBottom: 8,
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.06,
								shadowRadius: 8,
								elevation: 2
							}}
						>
							<View style={{ flex: 1 }}>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '600',
										color: '#000000',
										marginBottom: 4
									}}
								>
									{expense.description}
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									{expense.date} • {expense.category}
								</Text>
							</View>
							<Text
								style={{ fontSize: 16, fontWeight: '600', color: '#F44336' }}
							>
								{expense.amount}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Expense Categories */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Expense Categories
					</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
						{expenseCategories.map((category) => (
							<TouchableOpacity
								key={category.id}
								style={{
									width: '48%',
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
								<View
									style={{
										width: 48,
										height: 48,
										borderRadius: 24,
										backgroundColor: category.color,
										justifyContent: 'center',
										alignItems: 'center',
										marginBottom: 12
									}}
								>
									<Ionicons
										name={category.icon as keyof typeof Ionicons.glyphMap}
										size={24}
										color='#424242'
									/>
								</View>
								<Text
									style={{
										fontSize: 14,
										fontWeight: '600',
										color: '#424242',
										textAlign: 'center'
									}}
								>
									{category.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
					<View style={{ height: 70 }} />
				</ScrollView>
			</Background>
	)
}

export default ExpenseScreen
