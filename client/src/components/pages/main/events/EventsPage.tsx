import React from 'react';

import * as cl from './EventsPage.module.scss'
import {baseURL} from "src/api";

const EventsPage = () => {
  return (
    <div className={cl.eventsPage}>
      <div className={cl.eventsFeed}>
        <div className={cl.title}>Фильтры...</div>
        <div className={cl.title}>
          Все мероприятия
        </div>
        <div className={cl.eventCard}>
          <img
            // className={}
            src={baseURL + '8894a01b-86b1-4d7b-a970-8550ec7c1c2e.jpg'}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;