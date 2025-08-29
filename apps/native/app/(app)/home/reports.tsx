import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const ReportsScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#A8D5BA' }}>
			<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
				<View style={{ padding: 20 }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: 20
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
							Reports
						</Text>
						<View style={{ width: 40 }} />
					</View>

					<View
						style={{
							backgroundColor: '#FFFFFF',
							borderRadius: 24,
							padding: 24,
							alignItems: 'center',
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 8 },
							shadowOpacity: 0.1,
							shadowRadius: 32,
							elevation: 8
						}}
					>
						<Ionicons name='document-text' size={60} color='#A8D5BA' />
						<Text
							style={{
								fontSize: 20,
								fontWeight: '600',
								color: '#000000',
								marginTop: 16,
								textAlign: 'center'
							}}
						>
							Financial Reports Coming Soon
						</Text>
						<Text
							style={{
								fontSize: 16,
								color: '#757575',
								textAlign: 'center',
								marginTop: 8
							}}
						>
							Generate detailed financial reports and insights
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ReportsScreen
