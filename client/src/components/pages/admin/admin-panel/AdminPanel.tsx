import React from 'react';
import * as cl from './AdminPanel.module.scss'
import {Link, NavLink} from "react-router-dom";
import {
  adminAccountsRoute,
  adminEditorPagesRoute,
  adminEventsRoute, adminFAQRoute,
  adminNewsRoute,
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
        to={adminAccountsRoute}>
        FAQ
      </NavLink>
      <NavLink
        className={cl.link}
        to={adminFAQRoute}
      >
        Аккаунты
      </NavLink>
    </div>
  );
};

export default AdminPanel;