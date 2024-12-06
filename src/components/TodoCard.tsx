/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-02 17:56:46
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-04 18:04:22
 * @FilePath: /time_tracker/src/components/TodoCard.tsx
 */
import React from "react";
import { StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import { View, Text, Button } from "react-native-ui-lib";
import { TodoItem } from "../types/types";

interface TodoCardProps {
  todo: TodoItem;
  onClick: () => void;
}
const TodoCard: React.FC<TodoCardProps> = ({ todo,onClick }) => {

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onClick}>
      <ImageBackground
        source={{ uri: "https://fastly.picsum.photos/id/305/700/200.jpg?hmac=bKEdHfeBF-dxvXqpuPnOXTFw4MZaf_1M9FTXGVnAMJU" }} 
        style={styles.background}
        imageStyle={styles.imageOpacity}
      >
        <View style={styles.container}>
          <View style={styles.leftSection}>
            <Text style={styles.title}>Reading</Text>
            <Text style={styles.time}>1 min</Text>
          </View>
          <Button
            label="开始"
            backgroundColor="transparent"
            borderRadius={8}
            size="large"
            style={styles.button}
          />
        </View>
      </ImageBackground>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: "hidden",
    width: "95%",
    height: 80,
    marginVertical: 8,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  background: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageOpacity: {
    opacity: 0.5, // Set opacity only for the image
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "auto",
  },
  leftSection: {
    flex: 1,
    padding: 16,
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 0,
  },
  time: {
    fontSize: 14,
    color: "#333",
    marginTop: 8,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    color: "#4287f5",
    height: "100%",
    fontWeight: "bold",
  },
});

export default TodoCard;
