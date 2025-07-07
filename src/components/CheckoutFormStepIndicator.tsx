import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CheckoutFormStepIndicator() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Text>Pesonnal</Text>
      <Text>Payment</Text>
      <Text>Confirm</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "lightblue",
    height: 110,
  },
});
