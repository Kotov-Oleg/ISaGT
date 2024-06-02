import React from 'react';

import * as cl from './AdminNavbar.module.scss'
import {useUserStore} from "src/store/userStore";
import {useNavigate} from "react-router-dom";
import {mainRoute} from "src/routes/defaultRoutes";

const faculties = [{id: 1, name: 'ИСиГТ'}, {id: 2, name: 'ИГиО'}]

const AdminNavbar = () => {
  const user = useUserStore(state => state.user)
  const logout = useUserStore(state => state.logout)

  const navigate = useNavigate();


  const logoutHandler = (): void => {
    logout()
    navigate(mainRoute)
  }

  return (
    <div className={cl.navbar}>
      <div className={cl.title}>
        Факультеты РГГМУ
      </div>
      <div className={'switch-menu'}>
        {faculties.map(faculty =>
          <div key={faculty.id} className={'switch-menu__btn'}>{faculty.name}</div>
        )}
      </div>
      <div className={cl.user}>
        <div className={cl.userName}>{`${user.surname} ${user.name}`}</div>
        <button
          className={'button button_deny'}
          onClick={logoutHandler}
        >
          Выход
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;