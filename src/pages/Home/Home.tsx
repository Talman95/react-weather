import { FC } from 'react';

import { CurrentDay } from './components/CurrentDay/CurrentDay';
import { CurrentDayInfo } from './components/CurrentDayInfo/CurrentDayInfo';
import { Days } from './components/Days/Days';
import s from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={s.home}>
      <div className={s.current_day_wrapper}>
        <CurrentDay />
        <CurrentDayInfo />
      </div>
      <Days />
    </div>
  );
};
