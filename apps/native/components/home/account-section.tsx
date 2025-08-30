import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AccountItem from "./account-item";

const AccountSection = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    accounts: true,
    certificates: false,
    timeDeposits: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const accountsData = [
    {
      title: "Super Cash - Current Daily",
      accountNumber: "Account no. 1740199000006912",
      amount: "EGP 314,485.07",
      currency: "EGP",
    },
    {
      title: "Savings",
      accountNumber: "Account no. 1740203000004338",
      amount: "USD 1,094.17",
      currency: "USD",
    },
  ];

  const certificatesData = [
    {
      title: "Certificate of Deposit 1",
      accountNumber: "CD no. 123456789",
      amount: "EGP 50,000.00",
      currency: "EGP",
    },
  ];

  const timeDepositsData = [
    {
      title: "Time Deposit 1",
      accountNumber: "TD no. 987654321",
      amount: "EGP 619,012.50",
      currency: "EGP",
    },
  ];

  return (
    <View className="gap-4">
      {/* Accounts Section */}
      <View className="bg-white rounded-xl shadow-sm overflow-hidden">
        <TouchableOpacity
          className="p-4 flex-row items-center justify-between"
          onPress={() => toggleSection("accounts")}
        >
          <View className="flex-row items-center flex-1">
            <Ionicons name="business-outline" size={24} color="#6B7280" />
            <View className="ml-3 flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                Accounts
              </Text>
              <Text className="text-xl font-bold text-gray-900">
                EGP 367,607.02
              </Text>
            </View>
          </View>
          <Ionicons
            name={
              expandedSections.accounts ? "chevron-down" : "chevron-forward"
            }
            size={20}
            color="#6B7280"
          />
        </TouchableOpacity>

        {expandedSections.accounts && (
          <View className="border-t border-gray-100">
            {accountsData.map((account, index) => (
              <AccountItem key={index} {...account} />
            ))}
          </View>
        )}
      </View>

      {/* Certificates of Deposits Section */}
      <View className="bg-white rounded-xl shadow-sm overflow-hidden">
        <TouchableOpacity
          className="p-4 flex-row items-center justify-between"
          onPress={() => toggleSection("certificates")}
        >
          <View className="flex-row items-center flex-1">
            <Ionicons name="document-text-outline" size={24} color="#6B7280" />
            <View className="ml-3 flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                Certificates of Deposits
              </Text>
              <Text className="text-xl font-bold text-gray-900">
                EGP 50,000.00
              </Text>
            </View>
          </View>
          <Ionicons
            name={
              expandedSections.certificates ? "chevron-down" : "chevron-forward"
            }
            size={20}
            color="#6B7280"
          />
        </TouchableOpacity>

        {expandedSections.certificates && (
          <View className="border-t border-gray-100">
            {certificatesData.map((certificate, index) => (
              <AccountItem key={index} {...certificate} />
            ))}
          </View>
        )}
      </View>

      {/* Time Deposits Section */}
      <View className="bg-white rounded-xl shadow-sm overflow-hidden">
        <TouchableOpacity
          className="p-4 flex-row items-center justify-between"
          onPress={() => toggleSection("timeDeposits")}
        >
          <View className="flex-row items-center flex-1">
            <Ionicons name="time-outline" size={24} color="#6B7280" />
            <View className="ml-3 flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                Time Deposits
              </Text>
              <Text className="text-xl font-bold text-gray-900">
                EGP 619,012.50
              </Text>
            </View>
          </View>
          <Ionicons
            name={
              expandedSections.timeDeposits ? "chevron-down" : "chevron-forward"
            }
            size={20}
            color="#6B7280"
          />
        </TouchableOpacity>

        {expandedSections.timeDeposits && (
          <View className="border-t border-gray-100">
            {timeDepositsData.map((deposit, index) => (
              <AccountItem key={index} {...deposit} />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default AccountSection;
