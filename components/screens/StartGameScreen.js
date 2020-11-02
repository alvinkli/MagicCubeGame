import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Card";
import Colors from "../../constants/colors";
import Input from "../Input";
import NumberContainer from "../NumberContainer";

function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  function numberInputHandler(inputText) {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  }

  function resetInputHandler() {
    setEnteredValue("");
    setConfirmed(false);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(parseInt(chosenNumber));
    Keyboard.dismiss();
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <View>
        <Card style={styles.selectionContainer}>
          <Text>You Selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button
            title="START GAME"
            onPress={() => props.onStartGame(selectedNumber)}
          />
        </Card>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}> Start New Game! </Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={resetInputHandler}
            />
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={confirmInputHandler}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: { fontSize: 20, marginVertical: 10 },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  selectionContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
