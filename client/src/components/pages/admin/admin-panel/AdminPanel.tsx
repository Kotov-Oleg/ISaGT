import React from 'react';

import * as cl from './AdminPanel.module.scss'

import {NavLink, useParams} from "react-router-dom";
import {
  adminAccountsRoute,
  adminEditorPagesRoute,
  adminEventsRoute, adminFAQRoute,
  adminNewsRoute, adminRoute, adminScheduleRoute,
  adminSliderRoute
} from "src/routes/authorizedRoutes";

const AdminPanel = () => {
  const {faculty} = useParams()

  return (
    <div className={cl.adminPanel}>
      <NavLink
        className={cl.link}
        to={`/${adminRoute}/${faculty}/${adminNewsRoute}`}
      >
        Новости
      </NavLink>
      <NavLink
        className={cl.link}
        to={`/${adminRoute}/${faculty}/${adminEventsRoute}`}
      >
        Мероприятия
      </NavLink>
      <NavLink
        className={cl.link}
        to={`/${adminRoute}/${faculty}/${adminSliderRoute}`}

      >
        Слайдер
      </NavLink>
      <NavLink
        className={cl.link}
        to={`/${adminRoute}/${faculty}/${adminEditorPagesRoute}`}

      >
        Редактор страниц
      </NavLink>
      <NavLink
        className={cl.link}
        to={`/${adminRoute}/${faculty}/${adminFAQRoute}`}
      >

        FAQ
      </NavLink>
      <NavLink
        className={cl.link}
        to={`/${adminRoute}/${faculty}/${adminAccountsRoute}`}
      >
        Аккаунты
      </NavLink>
      {/*<NavLink*/}
      {/*  className={cl.link}*/}
      {/*  to={adminScheduleRoute}*/}
      {/*>*/}
      {/*  Расписание*/}
      {/*</NavLink>*/}
    </div>
  );
};

export default AdminPanel;