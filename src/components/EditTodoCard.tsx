import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Colors, Card, TextField } from "react-native-ui-lib";
import { TodoItem } from "../types/types";

interface EditTodoCardProps {
  todo: TodoItem;
  onClose: () => void;
}

const EditTodoCard: React.FC<EditTodoCardProps> = ({ todo, onClose }) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Dialog Title</Text>
      <Text style={styles.bodyText}>
        This is the body content of the dialog card.
      </Text>
      <TextField
        placeholder="Type something..."
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          onPress={() => onClose()}
        />
        <Button
          title="Confirm"
          onPress={() => {}}
        />
      </View>

    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    padding: 20,
    height: 250,
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default EditTodoCard;
