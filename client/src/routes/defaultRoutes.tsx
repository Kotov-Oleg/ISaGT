import React from "react";

import {RouteObject} from "react-router-dom";

// Импорт компонентов
import Main from "src/components/pages/main/main/Main";
import Navbar from "src/components/react-blocks/navbar/Navbar";
import Direkciya from "src/components/pages/main/direkciya/Direkciya";

export const mainRoute: string = '/'
export const direkciyaRoute: string = 'direkciya'
export const snoRoute: string = 'sno'
export const ulncRoute: string = 'ulnc'
export const kafedryRoute: string = 'kafedry'

export const defaultRoutes = (): RouteObject[] => {
  return [
    {
      path: '',
      element: <Navbar/>,
      children: [
        {
          path: mainRoute,
          element: <Main/>
        },
        {
          path: direkciyaRoute,
          element: <Direkciya/>
        },
        {
          path: snoRoute,
        },
        {
          path: ulncRoute,
        },
        {
          path: kafedryRoute
        }
      ]
    },

  ]
}