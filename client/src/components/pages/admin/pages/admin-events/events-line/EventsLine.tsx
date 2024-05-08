import React from 'react';
import * as cl from './EventsLine.module.scss';

const EventsLine = () => {
  return (
    <div className={cl.line}>
      <div className={'item item_start'}>Название</div>
      <div className={'item item_center'}>30.04.24</div>
      <div className={'item item_between'}>
        <button className={'edit-btn'}/>
        <button className={'delete-btn'}/>
      </div>
    </div>
  );
};

export default EventsLine;