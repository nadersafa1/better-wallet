import { LinearGradient } from 'expo-linear-gradient'

const Background = ({ children }: { children: React.ReactNode }) => {
	return (
		<LinearGradient
			colors={['#E8F5E880', '#D4F1D480', '#C8F2C880', '#B8E6B880']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0.5 }}
			style={{
				flex: 1,
				paddingTop: 60
			}}
		>
			{children}
		</LinearGradient>
	)
}
export default Background
