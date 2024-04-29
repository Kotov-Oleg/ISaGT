import React, {FC} from 'react';

// Импорт стилей
import './index.scss';
import './components/css-blocks/index.scss'

import {BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import Main from "src/components/pages/main/Main";
import Admin from "src/components/pages/admin/Admin";
import AdminNews from "src/components/pages/admin/pages/admin-news/AdminNews";
import AdminEvents from "src/components/pages/admin/pages/admin-events/AdminEvents";
import AdminSlider from "src/components/pages/admin/pages/admin-slider/AdminSlider";
import EditorPages from "src/components/pages/admin/pages/editor-pages/EditorPages";
import AdminAccounts from "src/components/pages/admin/pages/admin-accounts/AdminAccounts";
import AdminFAQ from "src/components/pages/admin/pages/admin-faq/AdminFAQ";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={'/'} element={<Main />}/>

        <Route path={'/admin'} element={<Admin/>}>
          <Route index element={<AdminNews/>}/>
          <Route path={'events'} element={<AdminEvents/>}/>
          <Route path={'slider'} element={<AdminSlider/>}/>
          <Route path={'editor-pages'} element={<EditorPages/>}/>
          <Route path={'accounts'} element={<AdminAccounts/>}/>
          <Route path={'faq'} element={<AdminFAQ/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;