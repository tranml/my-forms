import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";

export default function PersonalDetailsFormScreen() {
  const onNext = () => {
    //validate form

    //navigate to next screen
    router.push("/checkout/payment");
  };

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={styles.container}
    >
      <CustomTextInput label="Full Name" placeholder="John Doe" />

      <CustomTextInput
        label="Address"
        placeholder="123 Main St, Anytown, USA"
      />
      <View style={{ flexDirection: "row", gap: 8 }}>
        <CustomTextInput
          label="City"
          placeholder="Anytown"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Postal Code"
          placeholder="12345"
          inputMode="numeric"
          containerStyle={{ flex: 1 }}
        />
      </View>

      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />

      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="1234567890"
        inputMode="tel"
      />

      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    padding: 20,
    gap: 6,
  },
  button: {
    marginTop: "auto",
  },
});
