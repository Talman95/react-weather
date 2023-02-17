import { FC } from 'react';

import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

import { Day } from './Days';
import s from './Days.module.scss';

type PropsType = {
  day: Day;
};

export const DayCard: FC<PropsType> = ({ day }) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.date}>{day.date}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.iconId} />
      </div>
      <div className={s.temp_day}>{day.tempDay}</div>
      <div className={s.temp_night}>{day.tempDay}</div>
      <div className={s.info}>{day.info}</div>
    </div>
  );
};
