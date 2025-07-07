import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const steps = [
  {
    key: "personal",
    title: "Pesonnal",
  },
  {
    key: "payment",
    title: "Payment",
  },
  {
    key: "confirm",
    title: "Confirm",
  },
];

export default function CheckoutFormStepIndicator() {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {steps.map((step) => (
        <View key={step.key} style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{step.title}</Text>
        </View>
      ))}
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
    gap: 16,
  },
  stepContainer: {
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: "red",
  },
  stepTitle: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});
