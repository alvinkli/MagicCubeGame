import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
  header: { color: "black", fontSize: 18 },
});

export default Header;
