import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, View } from 'react-native'
import { useMemo } from 'react'

const Background = ({ children }: { children: React.ReactNode }) => {
  // Set of 20 green shades in the same family as the original colors
  const greenShades = [
    '#E8F5E860', // Original 1
    '#D4F1D460', // Original 2
    '#C8F2C860', // Original 3
    '#B8E6B860', // Original 4
    '#A8D5BA60', // Lighter green
    '#98C4A860', // Soft green
    '#88B39660', // Mint green
    '#78A28460', // Sage green
    '#68917260', // Forest green
    '#58806060', // Darker green
    '#C8E6C960', // Bright green
    '#B8D6B960', // Medium green
    '#A8C6A960', // Light forest
    '#98B69960', // Moss green
    '#88A68960', // Olive green
    '#78967960', // Deep green
    '#D4F1D460', // Duplicate for variety
    '#C4E1C460', // New shade
    '#B4D1B460', // New shade
    '#A4C1A460' // New shade
  ]

  // Randomly select 4 colors from the set
  const selectedColors = useMemo(() => {
    const shuffled = [...greenShades].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 4) as [string, string, string, string]
  }, [])

  // Randomize gradient direction
  const gradientDirection = useMemo(() => {
    const endX = Math.random()
    const endY = Math.random()

    return {
      end: { x: endX, y: endY }
    }
  }, [])

  return (
    <LinearGradient
      colors={selectedColors}
      start={{ x: 0, y: 0 }}
      end={gradientDirection.end}
      style={{
        flex: 1,
        paddingTop: 60
      }}
    >
      <ScrollView className='flex-1 mx-5' showsVerticalScrollIndicator={false}>
        <View className='flex-1 gap-4'>{children}</View>

        <View className='h-32' />
      </ScrollView>
    </LinearGradient>
  )
}
export default Background
