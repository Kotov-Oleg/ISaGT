import React from 'react';
import * as cl from './Admin.module.scss'
import AdminPanel from "src/components/pages/admin/admin-panel/AdminPanel";
import {Outlet} from "react-router-dom";
import AdminNavbar from "src/components/pages/admin/admin-navbar/AdminNavbar";


const Admin = () => {
  return (
    <div className={cl.adminPage}>
      <AdminNavbar/>
      <div className={cl.adminContent}>
        {/*<div className={cl.navbar}>*/}
        {/*</div>*/}
        <AdminPanel/>
        <div className={cl.page}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Admin;