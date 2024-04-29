import React from 'react';

import * as cl from './NewsHead.module.scss'

const NewsHead = () => {
  return (
    <div className={cl.head}>
      <div className={'item'}>Название</div>
      <div className={'item'}>Дата</div>
      <div className={'item'}></div>
    </div>
  );
};

export default NewsHead;