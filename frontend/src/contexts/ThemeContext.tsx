import { cloneElement, isValidElement, type ReactElement, type ReactNode, useMemo } from "react";
import { ThemeProvider as BootstrapThemeProvider } from "react-bootstrap";
import useLocalStorageState from "use-local-storage-state";
import { type AppTheme, ThemeContext, type ThemeContextValue } from "./ThemeContext.ts";

type AppThemeProviderProps = {
  children: ReactNode;
};

const THEME_KEY = "codearchx-theme";

const getPreferredTheme = (): AppTheme => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorageState<AppTheme>(THEME_KEY, {
    defaultValue: getPreferredTheme,
    serializer: {
      stringify: (value) => (value === "light" ? "light" : "dark"),
      parse: (value) => value
    }
  });
  const nextTheme: AppTheme = theme === "dark" ? "light" : "dark";

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      nextTheme,
      isDark: theme === "dark",
      isLight: theme === "light",
      setTheme: (selectedTheme) => setTheme(selectedTheme),
      toggleTheme: () => setTheme(nextTheme)
    }),
    [nextTheme, setTheme, theme]
  );

  const themedChildren = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        "data-bs-theme": theme,
        "data-theme": theme
      })
    : children;

  return (
    <ThemeContext.Provider value={value}>
      <BootstrapThemeProvider dir="ltr">{themedChildren}</BootstrapThemeProvider>
    </ThemeContext.Provider>
  );
}
