import { createContext } from "react";
import type { AppLocale } from "../i18n/messages.ts";

export type IntlContextValue = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};

export const IntlContext = createContext<IntlContextValue | undefined>(undefined);
