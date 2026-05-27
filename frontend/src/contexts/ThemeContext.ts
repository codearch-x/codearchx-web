import { createContext } from "react";

export type AppTheme = "dark" | "light";

export type ThemeContextValue = {
  theme: AppTheme;
  nextTheme: AppTheme;
  isDark: boolean;
  isLight: boolean;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
