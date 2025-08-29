import React from 'react';
import { View, Text, TouchableOpacity, Modal as RNModal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius } from '@/lib/design-system';

interface BottomSheetProps {
  visible: boolean;
  title: string;
  onClose?: () => void;
  children?: React.ReactNode;
  height?: number | string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  title,
  onClose,
  children,
  height = '50%',
}) => {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View 
          className={`${colors.backgrounds.cardPrimary} ${borderRadius.large} ${colors.shadows.card}`}
          style={{ height: typeof height === 'number' ? height : height as any }}
        >
          {/* Handle */}
          <View className="items-center py-3">
            <View className="w-12 h-1 bg-gray-300 rounded-full" />
          </View>

          {/* Header */}
          <View className={`${spacing.screen} pb-4 border-b border-[#E5E7EB]`}>
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
          </View>

          {/* Content */}
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <View className={spacing.screen}>
              {children}
            </View>
          </ScrollView>
        </View>
      </View>
    </RNModal>
  );
};

export default BottomSheet;
