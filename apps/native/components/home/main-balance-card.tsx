import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import Modal from "../ui/modal";
import BalanceBreakdown from "./balance-breakdown";

const MainBalanceCard = () => {
  const [isBalanceShown, setIsBalanceShown] = useState(true);

  const handleBalanceToggle = () => {
    setIsBalanceShown((prev) => !prev);
  };

  return (
    <View className="flex flex-col justify-center items-center  bg-white rounded-[36px] p-2 gap-2">
      <View className="flex-1 w-full bg-primary rounded-[34px] p-5 gap-2">
        <Text className="text-primary-foreground text-lg font-bold text-center">
          USD
        </Text>
        <TouchableOpacity
          onPress={handleBalanceToggle}
          className="absolute right-4 top-4 p-2"
        >
          <Ionicons
            name={isBalanceShown ? "eye-outline" : "eye-off-outline"}
            size={18}
            color="#424242"
          />
        </TouchableOpacity>
        <Text className="text-gray-600 text-xs font-regular text-center">
          1 USD = EUR 0.95 = GBR 0.79
        </Text>
        <View className={isBalanceShown ? "opacity-100" : "opacity-20"}>
          <View className="flex justify-center items-center">
            <Text
              className={`text-primary-foreground text-6xl text-center font-bold`}
            >
              $26,887.09
            </Text>
            <TouchableOpacity
              className="absolute -right-1 p-2"
              onPress={() => {
                router.push("/home/balance-breakdown");
              }}
            >
              <Ionicons name="pie-chart-outline" size={18} color="#424242" />
            </TouchableOpacity>
          </View>
          <Text
            className={`text-primary-foreground text-lg font-regular text-center`}
          >
            +$421.03
          </Text>
          {!isBalanceShown && (
            <View className="absolute inset-0 bg-primary opacity-90 rounded-lg" />
          )}
        </View>
      </View>
      <View className="flex-1 flex-row justify-around w-full px-8 py-4">
        <TouchableOpacity
          className="flex flex-col items-center gap-2 w-1/3"
          onPress={() => {
            router.push("/income");
          }}
          activeOpacity={0.8}
        >
          <Ionicons name="add-outline" size={20} color="#424242" />
          {/* <AntDesign name="plus" size={20} color="#424242" /> */}
          <Text className="text-gray-500 text-sm">Income</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-col items-center gap-2 w-1/3 border-r border-l border-gray-100">
          <Ionicons name="swap-horizontal-outline" size={20} color="#424242" />
          {/* <AntDesign name="swap" size={20} color="#424242" /> */}
          <Text className="text-gray-500 text-sm">Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-col items-center gap-2 w-1/3"
          onPress={() => {
            router.push("/expense");
          }}
          activeOpacity={0.8}
        >
          <Ionicons name="remove-outline" size={20} color="#424242" />
          {/* <AntDesign name="minus" size={20} color="#424242" /> */}
          <Text className="text-gray-500 text-sm">Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainBalanceCard;
