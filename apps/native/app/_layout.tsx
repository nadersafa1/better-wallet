import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { DarkTheme, DefaultTheme, type Theme, ThemeProvider } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as Font from 'expo-font'
import '../global.css'
import { queryClient } from '@/utils/trpc'
import { NAV_THEME } from '@/lib/constants'
import React, { useRef } from 'react'
import { useColorScheme } from '@/lib/use-color-scheme'
import { Platform } from 'react-native'
import { setAndroidNavigationBar } from '@/lib/android-navigation-bar'
import { authClient } from '@/lib/auth-client'

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light
}
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark
}

export const unstable_settings = {
  initialRouteName: '(auth)'
}

export default function RootLayout() {
  const hasMounted = useRef(false)
  const { colorScheme, isDarkColorScheme } = useColorScheme()
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)
  const [fontsLoaded, setFontsLoaded] = React.useState(false)
  const { data: session, isPending } = authClient.useSession()

  // Load Lato fonts
  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
        'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
        'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
        'Lato-Thin': require('../assets/fonts/Lato-Thin.ttf')
      })
      setFontsLoaded(true)
    }
    loadFonts()
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return
    }

    if (Platform.OS === 'web') {
      document.documentElement.classList.add('bg-background')
    }
    setAndroidNavigationBar(colorScheme)
    setIsColorSchemeLoaded(true)
    hasMounted.current = true
  }, [])

  if (!isColorSchemeLoaded || !fontsLoaded || isPending) {
    return null
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <SafeAreaProvider>
          <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
              {!session ? (
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
              ) : (
                <Stack.Screen name='(app)' options={{ headerShown: false }} />
              )}
            </Stack>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect
