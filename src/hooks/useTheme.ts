import { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../context/ThemeContext';

export const useTheme = (): ThemeContextType => {
  const data = useContext(ThemeContext);

  if (!data) throw new Error("Can not use 'useTheme' outside 'ThemeProvider'");

  return data;
};
