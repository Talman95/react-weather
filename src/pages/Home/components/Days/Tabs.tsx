import { FC } from 'react';

import s from './Days.module.scss';

const tabs = [
  {
    value: 'На неделю',
  },
  {
    value: 'На 10 дней',
  },
  {
    value: 'На месяц',
  },
];

export const Tabs: FC = () => {
  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {tabs.map(tab => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
