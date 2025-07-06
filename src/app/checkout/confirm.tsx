import { Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function ConfirmationFormScreen() {
  const onSubmit = () => {
    //validate form

    // submit the data

    // go to home screen
    router.push("/");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Confirmation Form Submission</Text>
      <CustomButton title="Submit" onPress={onSubmit} style={styles.button} />
    </KeyboardAwareScrollView>
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
