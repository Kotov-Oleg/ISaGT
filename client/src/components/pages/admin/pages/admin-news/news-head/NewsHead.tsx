import React from 'react';

import * as cl from './NewsHead.module.scss'

const NewsHead = () => {
  return (
    <thead>
      <tr>
        <th>Название</th>
        <th className={'table__center'}>Дата</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default NewsHead;