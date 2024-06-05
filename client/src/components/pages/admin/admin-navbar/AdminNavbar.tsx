import React from 'react';

import * as cl from './AdminNavbar.module.scss'
import {useUserStore} from "src/store/userStore";
import {NavLink, useNavigate} from "react-router-dom";
import {adminRoute} from "src/routes/authorizedRoutes";
import {useFacultyStore} from "src/store/facultyStore";

const AdminNavbar = () => {
  const user = useUserStore(state => state.user)
  const logout = useUserStore(state => state.logout)
  const faculties = useFacultyStore(state => state.faculties)

  const navigate = useNavigate();


  const logoutHandler = (): void => {
    logout()
    navigate('/')
  }

  return (
    <div className={cl.navbar}>
      <div className={cl.title}>
        Факультеты РГГМУ
      </div>
      <div className={'switch-menu'}>
        {faculties.map(faculty =>
          <NavLink key={faculty.id} className={'switch-menu__btn'} to={`/${adminRoute}/${faculty.alias}`}>{faculty.abbreviation}</NavLink>
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