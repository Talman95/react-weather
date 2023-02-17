import { FC } from 'react';

import { DayCard } from './DayCard';
import s from './Days.module.scss';

export type Day = {
  day: string;
  date: string;
  iconId: string;
  tempDay: string;
  tempNight: string;
  info: string;
};

const days: Day[] = [
  {
    day: 'Сегодня',
    date: '28 авг',
    iconId: 'sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Завтра',
    date: '29 авг',
    iconId: 'small-rain-sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'небольшой дождь и солнце',
  },
  {
    day: 'Ср',
    date: '30 авг',
    iconId: 'small-rain',
    tempDay: '+18',
    tempNight: '+15',
    info: 'небольшой дождь',
  },
  {
    day: 'Чт',
    date: '28 авг',
    iconId: 'mainly-cloudy',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Пт',
    date: '28 авг',
    iconId: 'rain',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Сб',
    date: '28 авг',
    iconId: 'sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Вс',
    date: '28 авг',
    iconId: 'sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
];

export const Days: FC = () => {
  return (
    <div className={s.days}>
      {days.map(day => (
        <DayCard day={day} key={day.day} />
      ))}
    </div>
  );
};
