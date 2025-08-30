import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const TransactionTags = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const flatListRef = useRef<FlatList>(null);

  const generateMonths = () => {
    const months = [];
    const currentDate = new Date();

    // Generate 12 months (6 before current, current, 5 after)
    for (let i = -6; i <= 5; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + i,
        1
      );
      months.push(date);
    }

    return months;
  };

  const months = generateMonths();

  const getMonthDisplay = (date: Date) => {
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();

    return {
      month,
      year: year === currentYear ? year.toString().slice(-2) : year.toString(),
      fullYear: year,
    };
  };

  const getMonthData = (date: Date) => {
    // Mock data - in real app this would come from your data source
    return {
      needs: { income: 1650.06, expense: 302.5 },
      wants: { income: 850.3, expense: 450.2 },
      investments: { income: 2100.0, expense: 0 },
    };
  };

  const handleMonthSelect = (date: Date) => {
    setSelectedMonth(date);
  };

  const renderMonthItem = ({ item, index }: { item: Date; index: number }) => {
    const monthDisplay = getMonthDisplay(item);
    const isSelected =
      item.getMonth() === selectedMonth.getMonth() &&
      item.getFullYear() === selectedMonth.getFullYear();

    return (
      <TouchableOpacity
        onPress={() => handleMonthSelect(item)}
        className={`mx-1 w-15 px-4 py-2 rounded-xl ${
          isSelected ? "bg-primary" : "bg-gray-100"
        }`}
        activeOpacity={0.7}
      >
        <Text
          className={`text-center font-semibold ${
            isSelected ? "text-primary-foreground" : "text-gray-700"
          }`}
        >
          {monthDisplay.month}
        </Text>
        <Text
          className={`text-center text-xs ${
            isSelected ? "text-primary-foreground" : "text-gray-500"
          }`}
        >
          {monthDisplay.year}
        </Text>
      </TouchableOpacity>
    );
  };

  const monthData = getMonthData(selectedMonth);

  return (
    <View className="flex flex-col gap-3">
      {/* Header with month selection */}
      <View className="flex-row items-center justify-between px-2">
        <View className="flex-row items-center gap-2">
          <View className="w-8 h-8 bg-blue-100 rounded-lg items-center justify-center">
            <AntDesign name="calendar" size={16} color="#3B82F6" />
          </View>
          <Text className="text-primary-foreground text-base font-semibold">
            Select Month
          </Text>
        </View>

        <TouchableOpacity
          className="p-2 bg-white rounded-lg"
          activeOpacity={0.7}
        >
          <AntDesign name="bars" size={16} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Horizontal month list */}
      <FlatList
        ref={flatListRef}
        data={months}
        renderItem={renderMonthItem}
        keyExtractor={(item) => item.toISOString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        initialScrollIndex={6} // Start at current month
        getItemLayout={(data, index) => ({
          length: 80, // Approximate item width
          offset: 80 * index,
          index,
        })}
      />

      {/* Compact transaction tags */}
      <View className="flex-row flex-1 w-full justify-between gap-2">
        <View className="flex-1 items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
          <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center">
            <MaterialIcons name="home" size={16} color="#3B82F6" />
          </View>
          <Text className="text-primary-foreground text-xs font-medium text-center">
            Needs
          </Text>
          <View className="flex flex-col items-center gap-0.5">
            <Text className="text-green-500 text-sm font-semibold text-center">
              ${monthData.needs.income.toLocaleString()}
            </Text>
            <Text className="text-red-500 text-xs font-medium text-center">
              ${monthData.needs.expense.toLocaleString()}
            </Text>
          </View>
        </View>

        <View className="flex-1 items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
          <View className="w-8 h-8 bg-purple-100 rounded-full items-center justify-center">
            <FontAwesome5 name="shopping-bag" size={14} color="#8B5CF6" />
          </View>
          <Text className="text-primary-foreground text-xs font-medium text-center">
            Wants
          </Text>
          <View className="flex flex-col items-center gap-0.5">
            <Text className="text-green-500 text-sm font-semibold text-center">
              ${monthData.wants.income.toLocaleString()}
            </Text>
            <Text className="text-red-500 text-xs font-medium text-center">
              ${monthData.wants.expense.toLocaleString()}
            </Text>
          </View>
        </View>

        <View className="flex-1 items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
          <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center">
            <AntDesign name="linechart" size={16} color="#10B981" />
          </View>
          <Text className="text-primary-foreground text-xs font-medium text-center">
            Investments
          </Text>
          <View className="flex flex-col items-center gap-0.5">
            <Text className="text-green-500 text-sm font-semibold text-center">
              ${monthData.investments.income.toLocaleString()}
            </Text>
            <Text className="text-red-500 text-xs font-medium text-center">
              ${monthData.investments.expense.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionTags;
