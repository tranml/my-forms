import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const PaymentInfoSchema = z.object({
  cardNumber: z.string().length(16, { message: "Card number must be 16 digits" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Expiry date must be in the format MM/YY",
  }),
  cvv: z.coerce
    .number()
    .min(100, { message: "CVV must be 3 digits" })
    .max(999, { message: "CVV must be 3 digits" }),
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
