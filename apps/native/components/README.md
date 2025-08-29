# Animated Background Components

Beautiful organic animated backgrounds for your React Native app using React Native Skia.

## Components

### `AnimatedBackground`
A standard animated background with organic blob shapes and smooth animations.

### `AnimatedBackgroundEnhanced`
An enhanced version with more sophisticated morphing animations and better organic shapes.

### `AnimatedBackgroundDemo`
A demo component showcasing different intensity levels and background types.

## Features

- **Organic Blob Shapes**: Smooth, flowing curves using cubic bezier paths
- **Mint Color Palette**: Uses your design system colors
- **Gentle Animations**: Breathing, scaling, and morphing effects
- **Performance Optimized**: Built with React Native Skia for smooth 60fps animations
- **Customizable Intensity**: Subtle, medium, or strong animation levels
- **Full Screen Coverage**: Positioned absolutely with proper z-indexing

## Installation

The components use `@shopify/react-native-skia` which should already be installed:

```bash
npm install @shopify/react-native-skia
```

## Usage

### Basic Usage

```tsx
import { AnimatedBackground } from '@/components/animated-background'

export default function MyScreen() {
  return (
    <AnimatedBackground intensity="medium">
      <View style={{ flex: 1 }}>
        {/* Your screen content */}
      </View>
    </AnimatedBackground>
  )
}
```

### Enhanced Version

```tsx
import { AnimatedBackgroundEnhanced } from '@/components/animated-background-enhanced'

export default function MyScreen() {
  return (
    <AnimatedBackgroundEnhanced intensity="subtle">
      <View style={{ flex: 1 }}>
        {/* Your screen content */}
      </View>
    </AnimatedBackgroundEnhanced>
  )
}
```

### Demo Component

```tsx
import { AnimatedBackgroundDemo } from '@/components/animated-background-demo'

export default function DemoScreen() {
  return <AnimatedBackgroundDemo />
}
```

## Props

### `AnimatedBackgroundProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to render over the background |
| `intensity` | `'subtle' \| 'medium' \| 'strong'` | `'medium'` | Animation intensity level |

## Intensity Levels

- **Subtle**: Very gentle animations, low opacity (0.25-0.3)
- **Medium**: Balanced animations, moderate opacity (0.4-0.5)
- **Strong**: More pronounced animations, higher opacity (0.6-0.7)

## Color Palette

The components use your design system mint colors:

- Primary: `#A8D5BA`
- Secondary: `#C8E6C9`
- Accent: `#81C784`
- Variation 1: `#B2DFDB`
- Variation 2: `#90CAF9`
- Variation 3: `#A5D6A7`

## Animation Details

- **Breathing Effect**: Blobs scale up and down gently
- **Morphing**: Shapes change over time using smooth path interpolation
- **Rotation**: Slow rotation for added visual interest
- **Layering**: Multiple overlapping blobs create depth
- **Staggered Timing**: Each blob animates with different delays for organic feel

## Performance

- Uses React Native Skia for hardware-accelerated rendering
- Optimized for 60fps animations
- Proper cleanup on component unmount
- Minimal impact on app performance

## Integration Examples

### Auth Screens
The animated background is already integrated into:
- `onboarding.tsx` - Welcome screens
- `login.tsx` - Sign in screen

### Custom Integration
You can wrap any screen content:

```tsx
<AnimatedBackgroundEnhanced intensity="subtle">
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      {/* Your content */}
    </ScrollView>
  </SafeAreaView>
</AnimatedBackgroundEnhanced>
```

## Troubleshooting

### Animation Not Working
- Ensure `@shopify/react-native-skia` is properly installed
- Check that the component is mounted in a valid React Native environment
- Verify that animations are not disabled in device settings

### Performance Issues
- Try reducing intensity to "subtle"
- Consider using the standard `AnimatedBackground` instead of enhanced
- Check for other heavy animations running simultaneously

### Visual Issues
- Ensure the background component is positioned correctly (absolute positioning)
- Check that content has proper z-index values
- Verify screen dimensions are being calculated correctly

