import Background from "@/components/background";
import Header from "@/components/ui/header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AccountsScreen = () => {
  const accounts = [
    {
      id: "1",
      name: "Daily Account",
      balance: "$2,150.00",
      type: "checking",
      accountNumber: "****1234",
      provider: "BM Bank",
    },
    {
      id: "2",
      name: "Savings",
      balance: "$1,350.00",
      type: "savings",
      accountNumber: "****5678",
      provider: "BM Bank",
    },
    {
      id: "3",
      name: "Credit Card",
      balance: "-$450.00",
      type: "credit",
      accountNumber: "****9012",
      provider: "BM Bank",
      limit: "$5,000.00",
    },
  ];

  const getAccountIcon = (type: string) => {
    switch (type) {
      case "checking":
        return "wallet";
      case "savings":
        return "save";
      case "credit":
        return "card";
      default:
        return "wallet";
    }
  };

  const getAccountColor = (type: string) => {
    switch (type) {
      case "checking":
        return "#A8D5BA";
      case "savings":
        return "#FFE082";
      case "credit":
        return "#C8E6C9";
      default:
        return "#A8D5BA";
    }
  };

  const getAccountTypeLabel = (type: string) => {
    switch (type) {
      case "checking":
        return "Checking";
      case "savings":
        return "Savings";
      case "credit":
        return "Credit Card";
      default:
        return "Account";
    }
  };

  return (
    <Background>
      <ScrollView className="flex-1 mx-5" showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-4">
          {/* Header */}
          <Header
            title="Accounts"
            showBack
            rightAction={{
              icon: "add-outline",
              onPress: () => console.log("add"),
            }}
          />

          {/* Total Balance Card */}
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
              <Text style={{ fontSize: 16, color: "#424242", marginBottom: 8 }}>
                Total Balance
              </Text>
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "700",
                  color: "#000000",
                  marginBottom: 16,
                }}
              >
                $3,050.00
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 14, color: "#757575", marginBottom: 4 }}
                  >
                    Checking
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    $2,150.00
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ fontSize: 14, color: "#757575", marginBottom: 4 }}
                  >
                    Savings
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    $1,350.00
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ fontSize: 14, color: "#757575", marginBottom: 4 }}
                  >
                    Credit
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#F44336",
                    }}
                  >
                    -$450.00
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Accounts List */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Your Accounts
            </Text>
            {accounts.map((account) => (
              <TouchableOpacity
                key={account.id}
                onPress={() =>
                  router.push(`/home/account-details?id=${account.id}`)
                }
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  padding: 16,
                  marginBottom: 12,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.06,
                  shadowRadius: 8,
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        backgroundColor: getAccountColor(account.type),
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 16,
                      }}
                    >
                      <Ionicons
                        name={getAccountIcon(account.type)}
                        size={24}
                        color="#424242"
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "600",
                          color: "#000000",
                          marginBottom: 4,
                        }}
                      >
                        {account.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#757575",
                          marginBottom: 2,
                        }}
                      >
                        {account.provider} • {account.accountNumber}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#424242",
                          fontWeight: "500",
                        }}
                      >
                        {getAccountTypeLabel(account.type)}
                      </Text>
                      {account.type === "credit" && account.limit && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#757575",
                            marginTop: 2,
                          }}
                        >
                          Limit: {account.limit}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "600",
                        color: account.balance.startsWith("-")
                          ? "#F44336"
                          : "#000000",
                        marginBottom: 4,
                      }}
                    >
                      {account.balance}
                    </Text>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#757575"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Quick Actions */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              Quick Actions
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  padding: 20,
                  marginRight: 8,
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
                    backgroundColor: "#A8D5BA",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <Ionicons name="swap-horizontal" size={24} color="#424242" />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Transfer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  padding: 20,
                  marginLeft: 8,
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
                    backgroundColor: "#FFE082",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <Ionicons name="card" size={24} color="#424242" />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#424242",
                    textAlign: "center",
                  }}
                >
                  Add Card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

export default AccountsScreen;
