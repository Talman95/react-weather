import { FC } from 'react';

import Select from 'react-select';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';

import s from './Header.module.scss';

export const Header: FC = () => {
  const theme = useTheme();

  const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Псков' },
  ];

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,

      backgroundColor: theme.theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === 'dark' ? '#fff' : '#000',
    }),
  };

  const changeTheme = (): void => {
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme} aria-hidden="true">
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[0]} options={options} styles={selectStyles} />
      </div>
    </header>
  );
};
