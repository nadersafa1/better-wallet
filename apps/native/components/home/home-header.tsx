import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          router.push("/home/profile");
        }}
        className="flex-row items-center gap-2"
      >
        <View className="w-12 h-12 rounded-full bg-black justify-center items-center">
          <Text className="text-white text-lg font-bold">N</Text>
        </View>
        <Text className="text-primary-foreground text-lg">Hi, Nader</Text>
      </TouchableOpacity>

      <View className="flex-row items-center gap-1">
        <TouchableOpacity
          onPress={() => {
            router.push("/home/settings");
          }}
          className="p-1"
        >
          <Ionicons name="analytics-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/home/settings");
          }}
          className="p-1"
        >
          <Ionicons name="cog-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/home/notifications");
          }}
          className="p-1"
        >
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <Entypo
            name="dot-single"
            size={24}
            color="red"
            className="absolute -top-2.5 -right-1.5"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
