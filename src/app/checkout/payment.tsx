import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentInfoSchema,
  PaymentInfoFormData,
  useCheckoutForm,
} from "../../contexts/CheckoutFormProvider";
import CustomCheckbox from "../../components/CustomCheckbox";
import CustomSwitch from "../../components/CustomSwitch";

export default function PaymentDetailsFormScreen() {
  const { setPaymentInfo, paymentInfo } = useCheckoutForm();

  const form = useForm({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: paymentInfo,
  });

  const onNext: SubmitHandler<PaymentInfoFormData> = (data) => {
    //validate form
    setPaymentInfo(data);
    console.log(data);

    //navigate to next screen
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          label="Card Number"
          name="cardNumber"
          inputMode="numeric"
          placeholder="1234 5678 9012 3456"
          maxLength={16}
        />

        <View style={styles.row}>
          <CustomTextInput
            label="Expiry Date"
            name="expiryDate"
            placeholder="12/27"
            containerStyle={{ flex: 1 }}
            maxLength={5}
          />
          <CustomTextInput
            label="CVV"
            name="cvv"
            inputMode="numeric"
            placeholder="123"
            containerStyle={{ flex: 1 }}
            maxLength={3}
          />
        </View>
        <CustomCheckbox
          name="saveCard"
          label="Save card for future purchases"
        />

        <CustomSwitch name="switchValue" label="Switch Value" />

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
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  button: {
    marginTop: "auto",
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
});
