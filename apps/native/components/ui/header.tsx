import { typography } from "@/lib/design-system";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBack,
  rightAction,
}) => {
  return (
    <View className="flex-row items-center justify-between gap-4">
      <View>
        {showBack && (
          <TouchableOpacity
            onPress={onBack ?? (() => router.back())}
            className="p-1"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back-outline" size={30} color="#424242" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text
          className={`${typography.headingLarge} text-center`}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      <View>
        {rightAction && (
          <TouchableOpacity
            onPress={rightAction.onPress}
            className="p-1"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name={rightAction.icon} size={30} color="#424242" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
