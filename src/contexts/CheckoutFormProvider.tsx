import { createContext, useContext, PropsWithChildren, useState } from "react";
import * as z from "zod";
import { router } from "expo-router";
import { Alert } from "react-native";

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" })
    .trim(),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
  country: z.string().length(2, { message: "Country is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
});

export type PersonalInfoFormData = z.infer<typeof PersonalInfoSchema>;

export const PaymentInfoSchema = z.object({
  cardNumber: z
    .string()
    .length(16, { message: "Card number must be 16 digits" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Expiry date must be in the format MM/YY",
  }),
  cvv: z.coerce
    .number()
    .min(100, { message: "CVV must be 3 digits" })
    .max(999, { message: "CVV must be 3 digits" }),
});

export type PaymentInfoFormData = z.infer<typeof PaymentInfoSchema>;

type CheckoutFormContextType = {
  personalInfo: PersonalInfoFormData | undefined;
  setPersonalInfo: (info: PersonalInfoFormData | undefined) => void;
  paymentInfo: PaymentInfoFormData | undefined;
  setPaymentInfo: (info: PaymentInfoFormData | undefined) => void;
  onSubmit: () => void;
};

const CheckoutFormContext = createContext<CheckoutFormContextType>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  onSubmit: () => {},
});

export function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<
    PersonalInfoFormData | undefined
  >();
  const [paymentInfo, setPaymentInfo] = useState<
    PaymentInfoFormData | undefined
  >();

  const onSubmit = () => {
    if (!personalInfo || !paymentInfo)
      return Alert.alert("Please fill in all fields");

    setPersonalInfo(undefined);
    setPaymentInfo(undefined);
    router.dismissAll()
    router.back();
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo,
        onSubmit,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
