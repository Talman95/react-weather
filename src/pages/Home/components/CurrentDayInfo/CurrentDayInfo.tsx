import { FC } from 'react';

import { Indicators } from '../../../../assets/icons/global/Indicators';
import cloud from '../../../../assets/images/cloud.png';

import s from './CurrentDayInfo.module.scss';

type DayInfoType = {
  iconId: string;
  title: string;
  value: string;
};

const currentDayInfoData: DayInfoType[] = [
  { iconId: 'temp', title: 'Температура', value: '20 - ощущается, как 17' },
  { iconId: 'pressure', title: 'Давление', value: '765 мм ртутного столба - нормальное' },
  { iconId: 'precipitation', title: 'Осадки', value: 'Без осадков' },
  { iconId: 'wind', title: 'Ветер', value: '3 м/с юго-запад - легкий ветер' },
];

export const CurrentDayInfo: FC = () => {
  return (
    <div className={s.container}>
      {currentDayInfoData.map(item => (
        <CurrentDayInfoItem key={item.iconId} item={item} />
      ))}
      <img className={s.cloud_img} src={cloud} alt="облако" />
    </div>
  );
};

type PropsType = {
  item: DayInfoType;
};

const CurrentDayInfoItem: FC<PropsType> = ({ item }) => {
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <Indicators id={item.iconId} />
      </div>
      <div className={s.indicator_title}>{item.title}</div>
      <div className={s.indicator_value}>{item.value}</div>
    </div>
  );
};
