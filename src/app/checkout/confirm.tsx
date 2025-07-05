
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

export default function ConfirmationFormScreen() {
  const onSubmit = () => {
    //validate form

    // submit the data

    // go to home screen
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text>Confirmation Form Submission</Text>
      <CustomButton title="Submit" onPress={onSubmit} style={styles.button} />
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
