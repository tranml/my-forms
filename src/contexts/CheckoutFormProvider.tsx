import { createContext, useContext, PropsWithChildren } from "react";

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
