import React from "react";

import {Navigate, RouteObject, useParams} from "react-router-dom";

// Импорт компонентов
import Main from "src/components/pages/main/main/Main";
import Navbar from "src/components/react-blocks/navbar/Navbar";
import Direkciya from "src/components/pages/main/direkciya/Direkciya";
import {FacultyI, useFacultyStore} from "src/store/facultyStore";

export const mainRoute: string = '/'
export const direkciyaRoute: string = 'direkciya'
export const snoRoute: string = 'sno'
export const ulncRoute: string = 'ulnc'
export const kafedryRoute: string = 'kafedry'



export const defaultRoutes = (faculties: FacultyI[]): RouteObject[] => {

  // const {faculties} = useFacultyStore()

  // Проверка факультета на валидность
  const FacultyRoute = () => {
    const { faculty } = useParams();

    if (faculties.findIndex(f=> f.alias === faculty) !== -1) {
      return <Main />;
    } else {
      return <Navigate to={'/' + faculties[0].alias} replace/>;
    }
  };

  return [
    {
      path: '/:faculty',
      element: <FacultyRoute/>,

    },
    {
      path: '',
      element: <Navbar/>,
      children: [
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