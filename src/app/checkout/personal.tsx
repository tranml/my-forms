import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

import {
  useForm,
  SubmitHandler,
  // Controller,
  FormProvider,
} from "react-hook-form";


import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PersonalDetailsFormScreen() {
  const onNext: SubmitHandler<any> = (data) => {
    //validate form: when get to the point, data is already validated by react-hook-form
    console.log("data", data);
    //navigate to next screen
    router.push("/checkout/payment");
  };

  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm();

  const form = useForm();

  console.log("errors", form.formState.errors);

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        {/* <Controller
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
      /> */}

        <CustomTextInput
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
        />

        <CustomTextInput
          name="address"
          label="Address"
          placeholder="123 Main St, Anytown, USA"
        />
        <View style={{ flexDirection: "row", gap: 8 }}>
          <CustomTextInput
            name="city"
            label="City"
            placeholder="Anytown"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="postalCode"
            label="Postal Code"
            placeholder="12345"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <CustomTextInput
          name="phoneNumber"
          label="Phone Number"
          placeholder="1234567890"
          inputMode="tel"
        />

        <CustomButton
          title="Next"
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
        />
      </FormProvider>
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
