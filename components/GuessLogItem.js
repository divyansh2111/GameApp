import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.item}>#{roundNumber}</Text>
      <Text style={styles.item}>Opponent's Guess {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Color.primary800,
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
  },
  item: {
    fontFamily: "open-sans",
  },
});
