import React from 'react';
import cn from 'classnames'
import * as cl from './Admin.module.scss'
import AdminPanel from "src/components/pages/admin/admin-panel/AdminPanel";
import {createBrowserRouter, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import AdminNews from "src/components/pages/admin/pages/admin-news/AdminNews";
import AdminEvents from "src/components/pages/admin/pages/admin-events/AdminEvents";
import Main from "src/components/pages/main/Main";


const Admin = () => {
  return (
    <div className={cl.adminPage}>
      <AdminPanel />
      <div className={cl.page}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Admin;