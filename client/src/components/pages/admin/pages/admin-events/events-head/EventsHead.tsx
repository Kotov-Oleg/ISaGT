import React from 'react';
import * as cl from './EventsHead.module.scss';

const EventsHead = () => {
  return (
    <thead>
    <tr>
      <th>Название</th>
      <th className={'table__center'}>Дата</th>
      <th className={'table__center'}>Время</th>
      <th></th>
    </tr>
    </thead>
  );
};

export default EventsHead;