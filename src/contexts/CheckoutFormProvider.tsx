import { createContext, useContext, PropsWithChildren, useState } from "react";
import * as z from "zod";

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" })
    .trim(),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
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
};

const CheckoutFormContext = createContext<CheckoutFormContextType>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
});

export function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<
    PersonalInfoFormData | undefined
  >();
  const [paymentInfo, setPaymentInfo] = useState<
    PaymentInfoFormData | undefined
  >();
  return (
    <CheckoutFormContext.Provider
      value={{ personalInfo, setPersonalInfo, paymentInfo, setPaymentInfo }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
