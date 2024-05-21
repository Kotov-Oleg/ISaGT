import React from 'react';

import * as cl from './AdminPanel.module.scss'

import {NavLink} from "react-router-dom";
import {
  adminAccountsRoute,
  adminEditorPagesRoute,
  adminEventsRoute, adminFAQRoute,
  adminNewsRoute, adminScheduleRoute,
  adminSliderRoute
} from "src/routes/authorizedRoutes";

const AdminPanel = () => {
  return (
    <div className={cl.adminPanel}>
      <NavLink
        className={cl.link}
        to={adminNewsRoute}
      >
        Новости
      </NavLink>
      <NavLink
        className={cl.link}
        to={adminEventsRoute}
      >
        Мероприятия
      </NavLink>
      <NavLink
        className={cl.link}
        to={adminSliderRoute}
      >
        Слайдер
      </NavLink>
      <NavLink
        className={cl.link}
        to={adminEditorPagesRoute}
      >
        Редактор страниц
      </NavLink>
      <NavLink
        className={cl.link}
        to={adminFAQRoute}>
        FAQ
      </NavLink>
      <NavLink
        className={cl.link}
        to={adminAccountsRoute}
      >
        Аккаунты
      </NavLink>
      <NavLink
        className={cl.link}
        to={adminScheduleRoute}
      >
        Расписание
      </NavLink>
    </div>
  );
};

export default AdminPanel;