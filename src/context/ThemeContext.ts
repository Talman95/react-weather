import { createContext } from 'react';

export type ThemeContextType = {
  theme: string;
  changeTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
