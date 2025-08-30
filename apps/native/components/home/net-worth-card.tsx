import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const NetWorthCard = () => {
  const [showBreakdown, setShowBreakdown] = useState(false);

  const currencyData = [
    { currency: "EGP", amount: "1,009,994.69", percentage: "85.2%" },
    { currency: "USD", amount: "1,094.17", percentage: "14.8%" },
  ];

  return (
    <View className="bg-white rounded-xl p-4 shadow-sm">
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-lg font-semibold text-gray-800">Net Worth</Text>
        <TouchableOpacity>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#6B7280"
          />
        </TouchableOpacity>
      </View>

      <Text className="text-3xl font-bold text-gray-900 mb-3">
        EGP 1,009,994.69
      </Text>

      <TouchableOpacity onPress={() => setShowBreakdown(!showBreakdown)}>
        <Text className="text-blue-600 text-sm font-medium">
          {showBreakdown ? "Hide" : "View"} currency breakdown
        </Text>
      </TouchableOpacity>

      {showBreakdown && (
        <View className="mt-3 pt-3 border-t border-gray-100">
          <Text className="text-sm font-medium text-gray-600 mb-2">
            Breakdown by Currency
          </Text>
          {currencyData.map((item, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center mb-1"
            >
              <Text className="text-sm text-gray-600">
                {item.currency} ({item.percentage})
              </Text>
              <Text className="text-sm font-medium text-gray-800">
                {item.currency} {item.amount}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default NetWorthCard;
