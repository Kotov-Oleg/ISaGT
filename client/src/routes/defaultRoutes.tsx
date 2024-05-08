import React from "react";

import {RouteObject} from "react-router-dom";

// Импорт компонентов
import Main from "src/components/pages/main/Main";

export const mainRoute: string = '/'

export const defaultRoutes = (): RouteObject[] => {
  return [
    {
      path: mainRoute,
      element: <Main/>
    }
  ]
}