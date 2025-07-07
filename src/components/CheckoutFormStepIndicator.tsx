import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSegments } from "expo-router";

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
  const segments = useSegments();
  const currentScreen = segments[segments.length - 1];
  const stepIndex = steps.findIndex((step) => step.key === currentScreen)

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {steps.map((step, index) => (
        <View
          key={step.key}
          style={[
            styles.stepContainer,
            { borderBottomColor: stepIndex >= index ? "#005055" : "lightgray" },
          ]}
        >
          <Text
            style={[
              styles.stepTitle,
              { color: stepIndex >= index ? "#005055" : "gray" },
            ]}
          >
            {step.title}
          </Text>
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
