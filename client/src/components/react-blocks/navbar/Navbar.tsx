import React from 'react';

import * as cl from './Navbar.module.scss'
import {NavLink, Outlet} from "react-router-dom";
import {direkciyaRoute, kafedryRoute, mainRoute, snoRoute, ulncRoute} from "src/routes/defaultRoutes";

const Navbar = () => {
  return (
    <>
      <div className={cl.navbar}>
        <div className={cl.navbarContent}>
          <div>
            <NavLink className={cl.title} to={mainRoute}>
              ИСиГТ
            </NavLink>
          </div>
          <div className={cl.navigation}>
            <NavLink className={cl.link} to={direkciyaRoute}>
              Дирекция
            </NavLink>
            <NavLink className={cl.link} to={snoRoute}>
              СНО
            </NavLink>
            <NavLink className={cl.link} to={ulncRoute}>
              УЛНЦ
            </NavLink>
            <NavLink className={cl.link} to={kafedryRoute}>
              Кафедры
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet/>
    </>

  );
};

export default Navbar;