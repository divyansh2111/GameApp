import { StyleSheet, Text } from "react-native";
import Color from "../constants/colors";

export default function IntructionTextComponent({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Color.accent500,
    fontSize: 24,
  },
});
