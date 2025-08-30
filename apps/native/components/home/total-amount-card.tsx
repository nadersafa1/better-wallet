import { View, Text } from "react-native";
import React from "react";
import DonutChart from "./donut-chart";

const TotalAmountCard = () => {
  // Chart data based on the image
  const chartData = [
    {
      label: "Accounts",
      value: 35.46,
      color: "#0D9488", // teal
    },
    {
      label: "Certificates",
      value: 4.82,
      color: "#3B82F6", // blue
    },
    {
      label: "Time Deposits",
      value: 59.71,
      color: "#166534", // dark green
    },
  ];

  return (
    <View className="bg-white rounded-xl p-4 shadow-sm">
      <Text className="text-lg font-semibold text-gray-800 mb-2">
        Total amount in 30 Aug 2025
      </Text>

      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-2xl font-bold text-gray-900 mb-4">
            EGP 1,036,619.52
          </Text>

          {/* Legend */}
          <View className="space-y-2">
            {chartData.map((item, index) => (
              <View key={index} className="flex-row items-center">
                <View
                  className="w-3 h-3 rounded-sm mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <Text className="text-sm text-gray-600">
                  {item.label} {item.value}%
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Donut Chart */}
        <DonutChart data={chartData} />
      </View>
    </View>
  );
};

export default TotalAmountCard;
