import { FC } from 'react';

import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

import s from './CurrentDay.module.scss';

export const CurrentDay: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.top_block}>
        <div className={s.top_block_inf}>
          <div className={s.temp}>20º</div>
          <div className={s.title}>Сегодня</div>
        </div>
        <div className={s.svg_block}>
          <GlobalSvgSelector id="sun" />
        </div>
      </div>
      <div className={s.bottom_block}>
        <div className={s.time}>21:03</div>
        <div className={s.city}>Санкт-Петербург</div>
      </div>
    </div>
  );
};
