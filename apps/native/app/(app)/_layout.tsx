import { Ionicons } from '@expo/vector-icons'
import { Tabs, usePathname, useRouter } from 'expo-router'
import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native'
import { AuthGuard } from '@/components/auth-guard'

// Individual Tab Component
const TabButton = ({
  tab,
  isActive,
  onPress
}: {
  tab: { name: string; icon: string; label: string }
  isActive: boolean
  onPress: () => void
}) => {
  const tabAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (isActive) {
      Animated.sequence([
        Animated.timing(tabAnim, {
          toValue: 1.1,
          duration: 150,
          useNativeDriver: true
        }),
        Animated.spring(tabAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 200,
          friction: 8
        })
      ]).start()
    }
  }, [isActive])

  return (
    <Animated.View
      style={[
        styles.tabButtonContainer,
        isActive && styles.tabButtonContainerActive,
        {
          transform: [{ scale: tabAnim }]
        }
      ]}
    >
      <TouchableOpacity
        style={[styles.tabButton, isActive && styles.tabButtonActive]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Ionicons
          name={tab.icon as keyof typeof Ionicons.glyphMap}
          size={isActive ? 28 : 24}
          color={isActive ? '#FFFFFF' : '#757575'}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}

// Custom Tab Bar Component
const CustomTabBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const slideAnim = useRef(new Animated.Value(100)).current
  const scaleAnim = useRef(new Animated.Value(0.8)).current

  useEffect(() => {
    // Animate tab bar entrance
    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 100,
        friction: 8
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 8
      })
    ]).start()
  }, [])

  const tabs = [
    {
      name: 'income',
      icon: 'add-outline',
      label: 'Income'
    },
    {
      name: 'home',
      icon: 'home-outline',
      label: 'Home'
    },
    {
      name: 'expense',
      icon: 'remove-outline',
      label: 'Expense'
    }
  ]

  const isActive = (tabName: string) => pathname.startsWith(`/${tabName}`)

  const handleTabPress = (tabName: string) => {
    if (tabName === 'home' && pathname !== '/home') {
      router.push('/(app)/home')
    } else if (tabName === 'income' && pathname !== '/income') {
      router.push('/(app)/income')
    } else if (tabName === 'expense' && pathname !== '/expense') {
      router.push('/(app)/expense')
    }
  }

  return (
    <Animated.View
      style={[
        styles.tabBarContainer,
        {
          transform: [{ translateY: slideAnim }, { scale: scaleAnim }]
        }
      ]}
    >
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const active = isActive(tab.name)
          return <TabButton key={tab.name} tab={tab} isActive={active} onPress={() => handleTabPress(tab.name)} />
        })}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 35,
    paddingHorizontal: 20
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: '#FFFFFF',
    // borderRadius: 32,
    // padding: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.06,
    // shadowRadius: 8,
    // elevation: 4,
    // gap: 8
  },
  tabButtonContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: -2,
    borderRadius: 100,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  tabButtonContainerActive: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1000
  },
  tabButton: {
    width: 48,
    height: 48,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2
  },
  tabButtonActive: {
    width: 56,
    height: 56,
    backgroundColor: '#000000',
    shadowColor: '#000'
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 4,
    // zIndex: 1000
  }
})

export default function AppLayout() {
  return (
    <AuthGuard requireAuth={true}>
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: 'none' }
          }}
        >
          <Tabs.Screen
            name='income/index'
            options={{
              href: null
            }}
          />
          <Tabs.Screen
            name='home'
            options={{
              href: null
            }}
          />
          <Tabs.Screen
            name='expense/index'
            options={{
              href: null
            }}
          />
        </Tabs>
        <CustomTabBar />
      </View>
    </AuthGuard>
  )
}
