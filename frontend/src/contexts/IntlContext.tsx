import { useEffect, useMemo, useState, type ReactNode } from "react";
import { IntlProvider } from "react-intl";
import useLocalStorageState from "use-local-storage-state";
import { LOCALES, loadMessages, type AppLocale, type AppMessages } from "../i18n/messages.ts";
import { IntlContext, type IntlContextValue } from "./IntlContext.ts";

type AppIntlProviderProps = {
  children: ReactNode;
};

const LOCALE_KEY = "codearchx-locale";

const isAppLocale = (locale: unknown): locale is AppLocale => {
  return typeof locale === "string" && LOCALES.includes(locale as AppLocale);
}

const getPreferredLocale = (): AppLocale => {
  if (typeof window === "undefined") return "en";

  const browserLanguage = window.navigator.language.toLowerCase();
  return browserLanguage.startsWith("bg") ? "bg" : "en";
}

const parseStoredLocale = (value: string): AppLocale => {
  if (isAppLocale(value)) return value;

  try {
    const parsed = JSON.parse(value);
    if (isAppLocale(parsed)) return parsed;
  } catch {
    // Ignore invalid stored values and fall back to the preferred locale.
  }

  return getPreferredLocale();
}

export const AppIntlProvider = ({ children }: AppIntlProviderProps) => {
  const [locale, setLocale] = useLocalStorageState<AppLocale>(LOCALE_KEY, {
    defaultValue: getPreferredLocale,
    serializer: {
      stringify: (value) => (isAppLocale(value) ? value : "en"),
      parse: parseStoredLocale
    }
  });
  const [messages, setMessages] = useState<AppMessages>({});

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    let isCurrent = true;

    async function loadLocaleMessages() {
      const localeMessages = await loadMessages(locale);

      if (isCurrent) {
        setMessages(localeMessages);
      }
    }

    void loadLocaleMessages();

    return () => {
      isCurrent = false;
    };
  }, [locale]);

  const value = useMemo<IntlContextValue>(
    () => ({ locale, setLocale: (selectedLocale) => setLocale(selectedLocale) }),
    [locale, setLocale]
  );

  return (
    <IntlContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages} defaultLocale="en">
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
}
