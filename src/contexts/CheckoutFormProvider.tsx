import { createContext, useContext, PropsWithChildren } from "react";
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


type CheckoutFormContextType = {};

const CheckoutFormContext = createContext<CheckoutFormContextType>({});

export function CheckoutFormProvider({ children }: PropsWithChildren) {
  return (
    <CheckoutFormContext.Provider value={{}}>
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
