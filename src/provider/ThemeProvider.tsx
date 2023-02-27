import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/changeCssRootVariables';

type PropsType = {
  children: ReactNode;
};

export const ThemeProvider: FC<PropsType> = ({ children, ...props }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme = useCallback((theme: string): void => {
    setTheme(theme);

    changeCssRootVariables(theme);
  }, []);

  const value = useMemo(() => ({ theme, changeTheme }), [changeTheme, theme]);

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
