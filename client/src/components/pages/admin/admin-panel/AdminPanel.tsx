import React from 'react';
import * as cl from './AdminPanel.module.scss'
import {NavLink} from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className={cl.adminPanel}>
      <NavLink to={'/admin'}>
        Новости
      </NavLink>
      <NavLink to={'/admin/events'}>
        Мероприятия
      </NavLink>
      <NavLink to={'/admin/slider'}>
        Слайдер
      </NavLink>
      <NavLink to={'/admin/editor-pages'}>
        Редактор страниц
      </NavLink>
      <NavLink to={'/admin/faq'}>
        FAQ
      </NavLink>
      <NavLink to={'/admin/accounts'}>
        Аккаунты
      </NavLink>
    </div>
  );
};

export default AdminPanel;