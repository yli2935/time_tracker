/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-02 12:14:10
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-02 16:51:25
 * @FilePath: /time_tracker/src/app/(tabs)/_layout.tsx
 */
import { Tabs, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Header from "../../components/Header";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff", 
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          header: () => <Header />,
          tabBarIcon: ({ color,focused }) => (
            <FontAwesome
              name="home"
              size={26}
              color={focused ? "#4287f5" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          headerTitle: "",
          header: () => <Header />,
          tabBarIcon: ({ color,focused }) => (
            <MaterialCommunityIcons
              name="format-list-text"
              size={24}
              color={focused ? "#4287f5" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="data"
        options={{
          headerTitle: "",
          header: () => <Header />,
          tabBarIcon: ({ color,focused }) => (
            <AntDesign
              name="piechart"
              size={24}
              color={focused ? "#4287f5" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mine"
        options={{
          headerTitle: "",
          header: () => <Header />,
          tabBarIcon: ({ color,focused }) => (
            <Ionicons
              name="people"
              size={24}
              color={focused ? "#4287f5" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
