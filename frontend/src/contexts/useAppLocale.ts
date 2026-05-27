import { useContext } from "react";
import { IntlContext, type IntlContextValue } from "./IntlContext.ts";

export const useAppLocale = (): IntlContextValue => {
  const context = useContext(IntlContext);

  if (!context) {
    throw new Error("useAppLocale must be used within AppIntlProvider");
  }

  return context;
}
