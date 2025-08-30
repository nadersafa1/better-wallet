import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import NetWorthCard from "./net-worth-card";
import PortfolioTabs from "./portfolio-tabs";
import TotalAmountCard from "./total-amount-card";
import AccountSection from "./account-section";

const BalanceBreakdown = () => {
  const [activeTab, setActiveTab] = useState<"have" | "owe">("have");

  return (
    <ScrollView className="flex-1">
      <View className="gap-4">
        {/* Net Worth Card */}
        <NetWorthCard />

        {/* Tabs */}
        <PortfolioTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Total Amount Card with Chart */}
        <TotalAmountCard />

        {/* Account Sections */}
        <AccountSection />
      </View>
    </ScrollView>
  );
};

export default BalanceBreakdown;
