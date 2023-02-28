import { FC, ReactNode, useCallback, useLayoutEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/changeCssRootVariables';

type PropsType = {
  children: ReactNode;
};

export const ThemeProvider: FC<PropsType> = ({ children, ...props }) => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light');

  const changeTheme = useCallback((theme: string): void => {
    setTheme(theme);
  }, []);

  const value = useMemo(() => ({ theme, changeTheme }), [changeTheme, theme]);

  useLayoutEffect(() => {
    changeCssRootVariables(theme);

    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
