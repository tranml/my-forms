import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

import RNPickerSelect from "react-native-picker-select";

import {
  useForm,
  SubmitHandler,
  // Controller,
  FormProvider,
} from "react-hook-form";

import {
  PersonalInfoSchema,
  PersonalInfoFormData,
  useCheckoutForm,
} from "../../contexts/CheckoutFormProvider";
import { zodResolver } from "@hookform/resolvers/zod";

import countries from "../../../assets/countries.json";

export default function PersonalDetailsFormScreen() {
  const { setPersonalInfo, personalInfo } = useCheckoutForm();

  const onNext: SubmitHandler<PersonalInfoFormData> = (data) => {
    //validate form: when get to the point, data is already validated by react-hook-form
    console.log("data", data.fullName);
    setPersonalInfo(data);
    //navigate to next screen
    router.push("/checkout/payment");
  };

  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm();

  const form = useForm<PersonalInfoFormData>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo,
  });

  // console.log("errors", form.formState.errors);

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
            name="postcode"
            label="Postal Code"
            placeholder="12345"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          placeholder={{
            label: "Select Country",
          }}
          items={countries.map((country) => ({
            label: country.name,
            value: country.code,
          }))}
          style={{
            viewContainer: {
              marginTop: 4,
              marginBottom: 4,
            },
            inputIOS: {
              borderColor: "gainsboro",
              borderWidth: 1,
              width: "100%",
              padding: 10,
              borderRadius: 5,
              pointerEvents: "none",
            },
          }}
        />

        <CustomTextInput
          name="phone"
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
