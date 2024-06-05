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
import AdminFaculty from "src/routes/AdminFaculty";
import {FacultyI, useFacultyStore} from "src/store/facultyStore";

export const adminRoute: string = 'admin'
export const adminNewsRoute: string = 'news'
export const adminEventsRoute: string = 'events'
export const adminSliderRoute: string = 'slider'
export const adminEditorPagesRoute: string = 'editor-pages'
export const adminAccountsRoute: string = 'accounts'
export const adminFAQRoute: string = 'faq'
export const adminScheduleRoute: string = 'schedule'

export const adminRoutes = (isAuth: boolean, faculties: FacultyI[]): RouteObject[] => {


  console.log('isAuth', isAuth)
  if (isAuth) {
    return [{
      path: adminRoute,
      element: <AdminFaculty faculties={faculties}/>,
      children: [
        {
          path: ':faculty',
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
        },
      ]
    }]
  } else {
    return [{}]
  }
}