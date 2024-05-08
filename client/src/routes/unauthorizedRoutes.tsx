import React from "react";

import {RouteObject} from "react-router-dom";

// Импорт компонентов
import AuthorizationPage from "src/components/pages/authorization/AuthorizationPage";

export const loginRoute = '/authorization'

export const unauthorizedRoutes = (isAuth: boolean): RouteObject[] => {
  if (!isAuth) {
    return [
      {
        path: loginRoute,
        element: <AuthorizationPage/>
      }
    ]
  } else {
    return [{}]
  }
}