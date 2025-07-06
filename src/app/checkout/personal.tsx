import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

export default function PersonalDetailsFormScreen() {
  const onNext = () => {
    //validate form: when get to the point, data is already validated by react-hook-form

    //navigate to next screen
    router.push("/checkout/payment");
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  console.log("errors", errors);

  return (
    <KeyboardAwareScrollView>
      <Controller
        control={control}
        name="fullName"
        rules={{ required: "Full Name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            label="Full Name"
            placeholder="John Doe"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

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

      <CustomButton
        title="Next"
        onPress={handleSubmit(onNext)}
        style={styles.button}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: "white",
    padding: 20,
    gap: 6,
  },
  button: {
    marginTop: "auto",
  },
});
