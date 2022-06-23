import { View, StyleSheet } from "react-native";
import Color from "../constants/colors";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 36,
    backgroundColor: Color.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center",
  },
});
