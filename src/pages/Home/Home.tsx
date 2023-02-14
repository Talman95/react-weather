import { FC } from 'react';

import { CurrentDay } from './components/CurrentDay/CurrentDay';
import s from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={s.home}>
      <CurrentDay />
    </div>
  );
};
