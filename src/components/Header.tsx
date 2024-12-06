import React from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Entypo
              name="plus"
              backgroundColor="#FFFFFF"
              size={24}
              color="white"
              style={styles.button}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Entypo
              name="dots-three-vertical"
              backgroundColor="#FFFFFF"
              size={24}
              color="white"
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#87CEEB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    paddingHorizontal: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "transparent",
    marginHorizontal: 2,
  },
});

export default Header;
