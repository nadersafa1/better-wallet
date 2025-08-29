import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const MainBalanceCard = () => {
  const [isBalanceShown, setIsBalanceShown] = useState(false);

  const handleBalanceToggle = () => {
    setIsBalanceShown((prev) => !prev);
  };

  return (
    <View className="flex flex-col justify-center items-center  bg-white rounded-[36px] p-2 gap-2">
      <View className="flex-1 w-full bg-primary rounded-[34px] px-8 py-5 gap-2">
        <Text className="text-primary-foreground text-lg font-bold text-center">
          USD
        </Text>
        <TouchableOpacity
          onPress={handleBalanceToggle}
          className="absolute right-2 top-2 p-4"
        >
          <Feather
            name={isBalanceShown ? "eye" : "eye-off"}
            size={18}
            color="#424242"
          />
        </TouchableOpacity>
        <Text className="text-gray-600 text-xs font-regular text-center">
          1 USD = EUR 0.95 = GBR 0.79
        </Text>
        <View className="relative">
          <Text
            className={`text-primary-foreground text-6xl text-center font-bold ${
              isBalanceShown ? "opacity-100" : "opacity-20"
            }`}
          >
            $26,887.09
          </Text>
          <Text
            className={`text-primary-foreground text-lg font-regular text-center ${
              isBalanceShown ? "opacity-100" : "opacity-20"
            }`}
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
          <AntDesign name="plus" size={20} color="#424242" />
          <Text className="text-gray-500 text-sm">Income</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-col items-center gap-2 w-1/3 border-r border-l border-gray-100">
          <AntDesign name="swap" size={20} color="#424242" />
          <Text className="text-gray-500 text-sm">Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-col items-center gap-2 w-1/3"
          onPress={() => {
            router.push("/expense");
          }}
          activeOpacity={0.8}
        >
          <AntDesign name="minus" size={20} color="#424242" />
          <Text className="text-gray-500 text-sm">Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainBalanceCard;
