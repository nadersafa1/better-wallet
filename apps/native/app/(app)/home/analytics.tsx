import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const AnalyticsScreen = () => {
	const [selectedPeriod, setSelectedPeriod] = useState('month')

	const periods = [
		{ id: 'week', label: 'Week' },
		{ id: 'month', label: 'Month' },
		{ id: 'quarter', label: 'Quarter' },
		{ id: 'year', label: 'Year' }
	]

	const spendingByCategory = [
		{
			category: 'Food & Dining',
			amount: '$450.00',
			percentage: 35,
			color: '#A8D5BA'
		},
		{
			category: 'Transportation',
			amount: '$280.00',
			percentage: 22,
			color: '#FFE082'
		},
		{
			category: 'Shopping',
			amount: '$200.00',
			percentage: 15,
			color: '#C8E6C9'
		},
		{
			category: 'Entertainment',
			amount: '$150.00',
			percentage: 12,
			color: '#FFF59D'
		},
		{ category: 'Bills', amount: '$120.00', percentage: 9, color: '#A8D5BA' },
		{ category: 'Other', amount: '$100.00', percentage: 7, color: '#FFE082' }
	]

	const monthlyTrends = [
		{ month: 'Jan', income: 2500, expenses: 1800 },
		{ month: 'Feb', income: 2800, expenses: 1900 },
		{ month: 'Mar', income: 3200, expenses: 2100 },
		{ month: 'Apr', income: 3000, expenses: 2000 },
		{ month: 'May', income: 3500, expenses: 2200 },
		{ month: 'Jun', income: 3800, expenses: 2400 }
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
							Analytics
						</Text>
						<TouchableOpacity>
							<Ionicons name='share-outline' size={24} color='#424242' />
						</TouchableOpacity>
					</View>
				</View>

				{/* Period Selector */}
				<View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{periods.map((period) => (
							<TouchableOpacity
								key={period.id}
								onPress={() => setSelectedPeriod(period.id)}
								style={{
									backgroundColor:
										selectedPeriod === period.id ? '#000000' : '#FFFFFF',
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
										color: selectedPeriod === period.id ? '#FFFFFF' : '#424242'
									}}
								>
									{period.label}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>

				{/* Summary Cards */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 16,
								marginRight: 8,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.06,
								shadowRadius: 8,
								elevation: 2
							}}
						>
							<Text style={{ fontSize: 14, color: '#757575', marginBottom: 4 }}>
								Total Income
							</Text>
							<Text
								style={{ fontSize: 20, fontWeight: '700', color: '#4CAF50' }}
							>
								$3,200.00
							</Text>
							<Text style={{ fontSize: 12, color: '#4CAF50' }}>
								+12.5% vs last month
							</Text>
						</View>
						<View
							style={{
								flex: 1,
								backgroundColor: '#FFFFFF',
								borderRadius: 16,
								padding: 16,
								marginLeft: 8,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.06,
								shadowRadius: 8,
								elevation: 2
							}}
						>
							<Text style={{ fontSize: 14, color: '#757575', marginBottom: 4 }}>
								Total Expenses
							</Text>
							<Text
								style={{ fontSize: 20, fontWeight: '700', color: '#F44336' }}
							>
								$1,300.00
							</Text>
							<Text style={{ fontSize: 12, color: '#F44336' }}>
								+8.2% vs last month
							</Text>
						</View>
					</View>
				</View>

				{/* Spending by Category */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Spending by Category
					</Text>
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
						{spendingByCategory.map((item) => (
							<View key={item.category} style={{ marginBottom: 16 }}>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: 8
									}}
								>
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<View
											style={{
												width: 12,
												height: 12,
												borderRadius: 6,
												backgroundColor: item.color,
												marginRight: 12
											}}
										/>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '600',
												color: '#000000'
											}}
										>
											{item.category}
										</Text>
									</View>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '600',
											color: '#000000'
										}}
									>
										{item.amount}
									</Text>
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
											width: `${item.percentage}%`,
											height: '100%',
											backgroundColor: item.color,
											borderRadius: 4
										}}
									/>
								</View>
								<Text style={{ fontSize: 12, color: '#757575', marginTop: 4 }}>
									{item.percentage}% of total spending
								</Text>
							</View>
						))}
					</View>
				</View>

				{/* Monthly Trends */}
				<View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Monthly Trends
					</Text>
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
						{monthlyTrends.map((trend) => (
							<View
								key={trend.month}
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginBottom: 16
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '600',
										color: '#000000',
										width: 40
									}}
								>
									{trend.month}
								</Text>
								<View style={{ flex: 1, marginHorizontal: 16 }}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											marginBottom: 4
										}}
									>
										<Text style={{ fontSize: 14, color: '#4CAF50' }}>
											Income: ${trend.income}
										</Text>
										<Text style={{ fontSize: 14, color: '#F44336' }}>
											Expenses: ${trend.expenses}
										</Text>
									</View>
									<View
										style={{
											height: 6,
											backgroundColor: '#F5F5F5',
											borderRadius: 3,
											overflow: 'hidden'
										}}
									>
										<View
											style={{
												width: `${(trend.expenses / trend.income) * 100}%`,
												height: '100%',
												backgroundColor: '#F44336',
												borderRadius: 3
											}}
										/>
									</View>
								</View>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '600',
										color: '#000000',
										width: 60
									}}
								>
									${trend.income - trend.expenses}
								</Text>
							</View>
						))}
					</View>
				</View>

				{/* Insights */}
				<View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
							color: '#000000',
							marginBottom: 16
						}}
					>
						Insights
					</Text>
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
								alignItems: 'flex-start',
								marginBottom: 16
							}}
						>
							<View
								style={{
									width: 40,
									height: 40,
									borderRadius: 20,
									backgroundColor: '#A8D5BA',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 16
								}}
							>
								<Ionicons name='trending-up' size={20} color='#424242' />
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
									Spending Increased
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									Your food & dining expenses increased by 15% compared to last
									month. Consider setting a budget for this category.
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'flex-start',
								marginBottom: 16
							}}
						>
							<View
								style={{
									width: 40,
									height: 40,
									borderRadius: 20,
									backgroundColor: '#FFE082',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 16
								}}
							>
								<Ionicons name='checkmark-circle' size={20} color='#424242' />
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
									Savings Goal Met
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									Great job! You've saved 40% of your income this month,
									exceeding your 30% goal.
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
							<View
								style={{
									width: 40,
									height: 40,
									borderRadius: 20,
									backgroundColor: '#C8E6C9',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 16
								}}
							>
								<Ionicons name='bulb' size={20} color='#424242' />
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
									Optimization Tip
								</Text>
								<Text style={{ fontSize: 14, color: '#757575' }}>
									Consider consolidating your entertainment expenses. You could
									save up to $50/month by using subscription bundles.
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AnalyticsScreen
