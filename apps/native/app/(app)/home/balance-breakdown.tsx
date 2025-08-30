import Background from "@/components/background";
import BalanceBreakdown from "@/components/home/balance-breakdown";
import Header from "@/components/ui/header";
import React from "react";

const BalanceBreakdownScreen = () => {
  return (
    <Background>
      <Header title="Portfolio breakdown" showBack />
      <BalanceBreakdown />
    </Background>
  );
};

export default BalanceBreakdownScreen;
