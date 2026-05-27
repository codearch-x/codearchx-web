import { useContext } from "react";
import { ThemeContext, type ThemeContextValue } from "./ThemeContext.ts";

export const useAppTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within AppThemeProvider");
  }

  return context;
}
