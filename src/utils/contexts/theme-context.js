import { createContext } from "react";

export const theme = {
  light: {
    background: "#eeeeee",
    color: "#222222",
  },
  dark: {
    background: "#222222",
    color: "#ffffff",
  },
};

export const ThemeContext = createContext(theme.light);
