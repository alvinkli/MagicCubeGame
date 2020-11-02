import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "./Card";
import Colors from "../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.numContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});
export default NumberContainer;
