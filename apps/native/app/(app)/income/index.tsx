import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Background from "@/components/background";

const IncomeScreen = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const incomeCategories = [
    { id: "1", name: "Salary", icon: "briefcase", color: "#A8D5BA" },
    { id: "2", name: "Freelance", icon: "laptop", color: "#FFE082" },
    { id: "3", name: "Investment", icon: "trending-up", color: "#C8E6C9" },
    { id: "4", name: "Bonus", icon: "gift", color: "#FFF59D" },
    { id: "5", name: "Other", icon: "add-circle", color: "#A8D5BA" },
  ];

  const recentIncome = [
    {
      id: "1",
      description: "Monthly Salary",
      amount: "+$2,500.00",
      date: "Today",
      category: "Salary",
    },
    {
      id: "2",
      description: "Freelance Project",
      amount: "+$750.00",
      date: "Yesterday",
      category: "Freelance",
    },
    {
      id: "3",
      description: "Investment Dividend",
      amount: "+$120.00",
      date: "Mar 14",
      category: "Investment",
    },
  ];

  return (
    <Background>
      {/* Header */}
      <View style={{ paddingBottom: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "700", color: "#000000" }}>
            Add Income
          </Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#424242" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Income Entry Card */}
      <View style={{ marginBottom: 24 }}>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 24,
            padding: 24,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.1,
            shadowRadius: 32,
            elevation: 8,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#000000",
              marginBottom: 16,
            }}
          >
            Quick Income Entry
          </Text>

          {/* Amount Input */}
          <View style={{ marginBottom: 16 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#424242",
                marginBottom: 8,
              }}
            >
              Amount
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F5F5F5",
                borderWidth: 1,
                borderColor: "#E0E0E0",
                borderRadius: 16,
                padding: 16,
                fontSize: 24,
                fontWeight: "600",
                color: "#000000",
                textAlign: "center",
              }}
              placeholder="$0.00"
              placeholderTextColor="#757575"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>

          {/* Description Input */}
          <View style={{ marginBottom: 16 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#424242",
                marginBottom: 8,
              }}
            >
              Description
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F5F5F5",
                borderWidth: 1,
                borderColor: "#E0E0E0",
                borderRadius: 16,
                padding: 16,
                fontSize: 16,
                color: "#424242",
              }}
              placeholder="What's this income for?"
              placeholderTextColor="#757575"
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* Category Selection */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#424242",
                marginBottom: 8,
              }}
            >
              Category
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {incomeCategories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  onPress={() => setSelectedCategory(category.id)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor:
                      selectedCategory === category.id
                        ? category.color
                        : "#F5F5F5",
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    marginBottom: 8,
                  }}
                >
                  <Ionicons
                    name={category.icon as keyof typeof Ionicons.glyphMap}
                    size={16}
                    color={
                      selectedCategory === category.id ? "#424242" : "#757575"
                    }
                    style={{ marginRight: 8 }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color:
                        selectedCategory === category.id
                          ? "#424242"
                          : "#757575",
                    }}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Add Income Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#000000",
              borderRadius: 24,
              padding: 16,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 16,
              elevation: 8,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>
              Add Income
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Income */}
      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#000000",
            marginBottom: 16,
          }}
        >
          Recent Income
        </Text>
        {recentIncome.map((income) => (
          <TouchableOpacity
            key={income.id}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 16,
              marginBottom: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#000000",
                  marginBottom: 4,
                }}
              >
                {income.description}
              </Text>
              <Text style={{ fontSize: 14, color: "#757575" }}>
                {income.date} • {income.category}
              </Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#4CAF50" }}>
              {income.amount}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Income Categories */}
      <View style={{ marginBottom: 32 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#000000",
            marginBottom: 16,
          }}
        >
          Income Categories
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
          {incomeCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={{
                width: "48%",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                padding: 16,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: category.color,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <Ionicons
                  name={category.icon as keyof typeof Ionicons.glyphMap}
                  size={24}
                  color="#424242"
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#424242",
                  textAlign: "center",
                }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Background>
  );
};

export default IncomeScreen;
