import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal as RNModal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  components,
} from "@/lib/design-system";

interface ModalButton {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "destructive";
}

interface ModalProps {
  visible: boolean;
  title: string;
  description?: string;
  buttons?: ModalButton[];
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  description,
  buttons = [],
  onClose,
  children,
}) => {
  const getButtonStyle = (variant: ModalButton["variant"] = "primary") => {
    switch (variant) {
      case "secondary":
        return components.button.secondary;
      case "destructive":
        return `${colors.text.error} ${borderRadius.medium} ${spacing.button} text-base font-semibold border border-red-200`;
      default:
        return components.button.primary;
    }
  };

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center p-5">
        <View
          className={`${colors.backgrounds.cardPrimary} ${borderRadius.large} ${colors.shadows.card} w-full max-w-sm`}
        >
          {/* Header */}
          <View className={`${spacing.card} border-b border-[#E5E7EB]`}>
            <View className="flex-row items-center justify-between">
              <Text className={`${typography.headingMedium} flex-1`}>
                {title}
              </Text>
              {onClose && (
                <TouchableOpacity
                  onPress={onClose}
                  className="p-2"
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Ionicons name="close" size={24} color="#6B7280" />
                </TouchableOpacity>
              )}
            </View>
            {description && (
              <Text className={`${typography.bodyMedium} mt-2`}>
                {description}
              </Text>
            )}
          </View>

          {/* Content */}
          {children && (
            <ScrollView className={`${spacing.card} max-h-96`}>
              {children}
            </ScrollView>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <View
              className={`${spacing.card} border-t border-[#E5E7EB] space-y-3`}
            >
              {buttons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={button.onPress}
                  className={getButtonStyle(button.variant)}
                >
                  <Text
                    className={`text-center ${
                      button.variant === "destructive"
                        ? "text-red-600"
                        : button.variant === "secondary"
                        ? colors.text.primary
                        : colors.text.white
                    }`}
                  >
                    {button.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
