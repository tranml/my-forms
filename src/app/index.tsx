import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Link href="/checkout" asChild>
        <CustomButton title="Checkout" />
      </Link>
      <StatusBar style="auto" />

      <Stack.Screen options={{ title: "Home" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
