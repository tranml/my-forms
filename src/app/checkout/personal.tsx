import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

export default function PersonalDetailsFormScreen() {
  const onNext = () => {
    //validate form

    //navigate to next screen
    router.push("/checkout/payment");
  };

  return (
    <View style={styles.container}>
      <Text>Personal</Text>
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  button: {
    marginTop: "auto",
  },
});
