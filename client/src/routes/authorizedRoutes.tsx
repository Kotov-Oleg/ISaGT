import React from "react";

import {RouteObject} from "react-router-dom";

// Импорт компонентов
import Admin from "src/components/pages/admin/Admin";
import AdminNews from "src/components/pages/admin/pages/admin-news/AdminNews";
import AdminEvents from "src/components/pages/admin/pages/admin-events/AdminEvents";
import AdminSlider from "src/components/pages/admin/pages/admin-slider/AdminSlider";
import EditorPages from "src/components/pages/admin/pages/editor-pages/EditorPages";
import AdminAccounts from "src/components/pages/admin/pages/admin-accounts/AdminAccounts";
import AdminFAQ from "src/components/pages/admin/pages/admin-faq/AdminFAQ";
import AdminSchedule from "src/components/pages/admin/pages/admin-schedule/AdminSchedule";

export const adminRoute: string = ''
export const adminNewsRoute: string = 'admin-news'
export const adminEventsRoute: string = 'admin-events'
export const adminSliderRoute: string = 'admin-slider'
export const adminEditorPagesRoute: string = 'admin-editor-pages'
export const adminAccountsRoute: string = 'admin-accounts'
export const adminFAQRoute: string = 'admin-faq'
export const adminScheduleRoute: string = 'admin-schedule'

export const adminRoutes = (isAuth: boolean): RouteObject[] => {
  console.log('isAuth', isAuth)
  if (isAuth) {
    return [{
      path: adminRoute,
      element: <Admin/>,
      children: [
        {
          path: adminNewsRoute,
          element: <AdminNews/>
        },
        {
          path: adminEventsRoute,
          element: <AdminEvents/>
        },
        {
          path: adminSliderRoute,
          element: <AdminSlider/>
        },
        {
          path: adminEditorPagesRoute,
          element: <EditorPages/>
        },
        {
          path: adminAccountsRoute,
          element: <AdminAccounts/>
        },
        {
          path: adminFAQRoute,
          element: <AdminFAQ/>
        },
        {
          path: adminScheduleRoute,
          element: <AdminSchedule/>
        }
      ]
    }]
  } else {
    return [{}]
  }
}