import React from 'react';
import * as cl from './EventsHead.module.scss';

const EventsHead = () => {
  return (
    <div className={cl.head}>
      <div className={'item-head item-head_start'}>Название</div>
      <div className={'item-head item-head_center'}>Дата</div>
      <div className={'item-head item-head_end'}></div>
    </div>
  );
};

export default EventsHead;