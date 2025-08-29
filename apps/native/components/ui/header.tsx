import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing } from '@/lib/design-system';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
  showThemeToggle?: boolean;
  onThemeToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBack,
  rightAction,
  showThemeToggle = false,
  onThemeToggle,
}) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View 
      className={`${colors.backgrounds.cardPrimary} ${spacing.screen} flex-row items-center justify-between`}
      style={{ paddingTop: insets.top + 16, paddingBottom: 16 }}
    >
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity
            onPress={onBack}
            className="mr-3 p-2"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="chevron-back" size={24} color="#1A1A1A" />
          </TouchableOpacity>
        )}
        <Text className={`${typography.headingLarge} flex-1`} numberOfLines={1}>
          {title}
        </Text>
      </View>
      
      <View className="flex-row items-center space-x-2">
        {showThemeToggle && (
          <TouchableOpacity
            onPress={onThemeToggle}
            className="p-2"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="moon" size={24} color="#6B7280" />
          </TouchableOpacity>
        )}
        
        {rightAction && (
          <TouchableOpacity
            onPress={rightAction.onPress}
            className="p-2"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name={rightAction.icon} size={24} color="#6B7280" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
