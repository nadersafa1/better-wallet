import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface AccountItemProps {
  title: string;
  accountNumber: string;
  amount: string;
  currency: string;
}

const AccountItem = ({
  title,
  accountNumber,
  amount,
  currency,
}: AccountItemProps) => {
  return (
    <TouchableOpacity className="p-4 border-b border-gray-50 last:border-b-0">
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-base font-medium text-gray-800 mb-1">
            {title}
          </Text>
          <Text className="text-sm text-gray-500">{accountNumber}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-lg font-semibold text-gray-900 mr-2">
            {amount}
          </Text>
          <Ionicons name="chevron-forward" size={16} color="#6B7280" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountItem;
