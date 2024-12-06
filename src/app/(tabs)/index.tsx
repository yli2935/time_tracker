/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-02 12:14:10
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-04 18:03:23
 * @FilePath: /time_tracker/src/app/(tabs)/index.tsx
 */
import { Text, StyleSheet, View, FlatList } from "react-native";

import TodoCard from "../../components/TodoCard";
import EditTodoCard from "../../components/EditTodoCard";
import { Dialog, PanningProvider } from "react-native-ui-lib";
import { useState } from "react";
const data = require("../../../assets/todoData.json");
import { TodoItem } from "../../types/types";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoItem >({id: 0, title: "", time: ""});
  const handleCardClick = (item: TodoItem) => {
    console.log(item);
    setSelectedTodo(item);
    setIsVisible(true);
  }
  const closeDialog = () => {
    setIsVisible(false);
  }
  return (
    <View style={styles.container}>
      {data.data.map((item: TodoItem, index: number) => (
        <TodoCard
          key={index}
          todo={item}
          onClick={() => handleCardClick(item)}
        />
      ))}
      <Dialog
        visible={isVisible}
        onDismiss={() => closeDialog()}
        panDirection={PanningProvider.Directions.DOWN}
        useSafeArea={true}
      >
        <EditTodoCard onClose={closeDialog} todo={selectedTodo}></EditTodoCard>
      </Dialog>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
});
