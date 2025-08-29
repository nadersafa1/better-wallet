import { AntDesign, Ionicons } from "@expo/vector-icons";
import type { Route } from "expo-router";
import { Link, router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Background from "@/components/background";

const HomeScreen = () => {
  const mockBalance = "$3,500.00";
  const mockAccounts = [
    { id: "1", name: "Daily Account", balance: "$2,150.00", type: "checking" },
    { id: "2", name: "Savings", balance: "$1,350.00", type: "savings" },
  ];

  const quickActions = [
    {
      title: "Accounts",
      icon: "wallet",
      route: "/home/accounts",
      color: "#A8D5BA",
    },
    {
      title: "Transactions",
      icon: "list",
      route: "/home/transactions",
      color: "#FFE082",
    },
    {
      title: "Transfer",
      icon: "swap-horizontal",
      route: "/home/transfer",
      color: "#C8E6C9",
    },
    {
      title: "Cards",
      icon: "card",
      route: "/home/credit-cards",
      color: "#FFF59D",
    },
    {
      title: "Analytics",
      icon: "analytics",
      route: "/home/analytics",
      color: "#A8D5BA",
    },
    {
      title: "Budget",
      icon: "pie-chart",
      route: "/home/budget",
      color: "#FFE082",
    },
    {
      title: "Reports",
      icon: "document-text",
      route: "/home/reports",
      color: "#C8E6C9",
    },
    {
      title: "Settings",
      icon: "settings",
      route: "/home/settings",
      color: "#FFF59D",
    },
  ];

  return (
    <Background>
      <ScrollView className="flex-1 mx-5" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ padding: 20, paddingBottom: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 14, color: "#424242", marginBottom: 4 }}>
                Welcome back,
              </Text>
              <Text
                style={{ fontSize: 24, fontWeight: "700", color: "#000000" }}
              >
                Nader Smith
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={() => {
                  router.push("/home/notifications");
                }}
              >
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="#424242"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push("/home/profile");
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#000000",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    N
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Balance Card */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
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
                fontSize: 48,
                fontWeight: "700",
                color: "#000000",
                marginBottom: 16,
              }}
            >
              {mockBalance}
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
                  This Month
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#4CAF50",
                  }}
                >
                  +$1,250.00
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 14, color: "#757575", marginBottom: 4 }}
                >
                  Spent
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#F44336",
                  }}
                >
                  -$850.00
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex flex-col justify-center items-center  bg-white rounded-[36px] p-2 gap-4">
          <View className="flex-1 w-full bg-primary rounded-[32px] px-8 py-5 gap-2">
            <Text className="text-primary-foreground text-lg font-bold text-center">
              USD
            </Text>
						<Text className="text-gray-600 text-xs font-regular text-center">
1 USD = EUR 0.95 = GBR 0.79
						</Text>
            <Text className="text-primary-foreground text-6xl text-center font-bold">
						$26,887.09
            </Text>
            <Text className="text-primary-foreground text-lg font-regular text-center ">+$421.03</Text>
          </View>
          <View className="flex-1 flex-row justify-around w-full px-8 py-4">
            <TouchableOpacity className="flex flex-col items-center gap-2 w-1/3">
              <AntDesign name="plus" size={20} color="#424242" />
              <Text className="text-gray-500 text-sm">Income</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-col items-center gap-2 w-1/3 border-r border-l border-gray-100">
              <AntDesign name="swap" size={20} color="#424242" />
              <Text className="text-gray-500 text-sm">Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-col items-center gap-2 w-1/3">
              <AntDesign name="minus" size={20} color="#424242" />
              <Text className="text-gray-500 text-sm">Expense</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* Quick Actions Grid */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
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
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {quickActions.map((action) => (
              <Link key={action.title} href={action.route as Route} asChild>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 16,
                    padding: 20,
                    marginBottom: 12,
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
                      backgroundColor: action.color,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <Ionicons
                      name={action.icon as keyof typeof Ionicons.glyphMap}
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
                    {action.title}
                  </Text>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>

        {/* Recent Accounts */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#000000" }}>
              Your Accounts
            </Text>
            <Link href="/home/accounts" asChild>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#424242",
                    fontWeight: "600",
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
          {mockAccounts.map((account) => (
            <TouchableOpacity
              key={account.id}
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor:
                      account.type === "checking" ? "#A8D5BA" : "#FFE082",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Ionicons
                    name={account.type === "checking" ? "wallet" : "save"}
                    size={20}
                    color="#424242"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    {account.name}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#757575" }}>
                    {account.type === "checking" ? "Checking" : "Savings"}
                  </Text>
                </View>
              </View>
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#000000" }}
              >
                {account.balance}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Transactions */}
        <View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#000000" }}>
              Recent Transactions
            </Text>
            <Link href="/home/transactions" asChild>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#424242",
                    fontWeight: "600",
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
          {[
            {
              id: "1",
              description: "Grocery Store",
              amount: "-$75.50",
              date: "Today",
              category: "Food",
            },
            {
              id: "2",
              description: "Salary Deposit",
              amount: "+$2,500.00",
              date: "Yesterday",
              category: "Income",
            },
            {
              id: "3",
              description: "Gas Station",
              amount: "-$45.00",
              date: "Mar 14",
              category: "Transport",
            },
          ].map((transaction) => (
            <TouchableOpacity
              key={transaction.id}
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
                  {transaction.description}
                </Text>
                <Text style={{ fontSize: 14, color: "#757575" }}>
                  {transaction.date} • {transaction.category}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: transaction.amount.startsWith("+")
                    ? "#4CAF50"
                    : "#F44336",
                }}
              >
                {transaction.amount}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 70 }} />
      </ScrollView>
    </Background>
  );
};

export default HomeScreen;
