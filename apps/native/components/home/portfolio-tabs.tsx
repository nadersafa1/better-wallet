import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface PortfolioTabsProps {
  activeTab: "have" | "owe";
  onTabChange: (tab: "have" | "owe") => void;
}

const PortfolioTabs = ({ activeTab, onTabChange }: PortfolioTabsProps) => {
  return (
    <View className="flex-row bg-gray-100 rounded-lg p-1">
      <TouchableOpacity
        className={`flex-1 py-3 px-4 rounded-md ${
          activeTab === "have" ? "bg-red-500" : "bg-transparent"
        }`}
        onPress={() => onTabChange("have")}
      >
        <Text
          className={`text-center font-medium ${
            activeTab === "have" ? "text-white" : "text-gray-700"
          }`}
        >
          I have
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`flex-1 py-3 px-4 rounded-md ${
          activeTab === "owe" ? "bg-red-500" : "bg-transparent"
        }`}
        onPress={() => onTabChange("owe")}
      >
        <Text
          className={`text-center font-medium ${
            activeTab === "owe" ? "text-white" : "text-gray-700"
          }`}
        >
          I owe
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PortfolioTabs;
