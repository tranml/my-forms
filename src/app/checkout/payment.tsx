import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const PaymentInfoSchema = z.object({
  cardNumber: z.string(),
  expiryDate: z.string(),
  cvv: z.string(),
});

type PaymentInfoFormData = z.infer<typeof PaymentInfoSchema>;

export default function PaymentDetailsFormScreen() {
  const form = useForm({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const onNext: SubmitHandler<PaymentInfoFormData> = (data) => {
    //validate form

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
        />

        <View style={styles.row}>
          <CustomTextInput
            label="Expiry Date"
            name="expiryDate"
            inputMode="numeric"
            placeholder="12/27"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            label="CVV"
            name="cvv"
            inputMode="numeric"
            placeholder="123"
            containerStyle={{ flex: 1 }}
          />
        </View>
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
