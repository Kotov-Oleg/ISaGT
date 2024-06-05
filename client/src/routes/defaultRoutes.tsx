import React from "react";

import {Navigate, RouteObject, useParams} from "react-router-dom";

// Импорт компонентов
import Main from "src/components/pages/main/main/Main";
import Navbar from "src/components/react-blocks/navbar/Navbar";
import Direkciya from "src/components/pages/main/direkciya/Direkciya";
import {FacultyI, useFacultyStore} from "src/store/facultyStore";
import FacultyRoute from "src/routes/FacultyRoute";
import Kafedra from "src/components/pages/main/kafedra/Kafedra";
import Education from "src/components/pages/main/education/Education";
import Science from "src/components/pages/main/science/Science";
import NewsPage from "src/components/pages/main/news/NewsPage";
import OneNewsPage from "src/components/pages/main/news/one-news-page/OneNewsPage";
import EventsPage from "src/components/pages/main/events/EventsPage";
import OneEventPage from "src/components/pages/main/events/one-event-page/OneEventPage";


export const kafedryRoute: string = 'kafedry'
export const direkciyaRoute: string = 'direkciya'
export const educationRoute: string = 'education'
export const scienceRoute: string = 'science'
export const newsRoute: string = 'news'
export const eventsRoute: string = 'events'




export const defaultRoutes = (faculties: FacultyI[]): RouteObject[] => {


  return [
    {
      path: '/',
      element: <FacultyRoute faculties={faculties}/>
    },
    {
      element: <Navbar/>,
      children: [
        {
          path: ':faculty',
          children: [
            {
              index: true,
              element: <FacultyRoute faculties={faculties}/>
            },
            {
              path: kafedryRoute,
              element: <Kafedra/>
            },
            {
              path: direkciyaRoute,
              element: <Direkciya/>
            },
            {
              path: educationRoute,
              element: <Education/>
            },
            {
              path: scienceRoute,
              element: <Science/>
            },
            {
              path: newsRoute,
              children: [
                {
                  index: true,
                  element: <NewsPage/>
                },
                {
                  path: ':newsId',
                  element: <OneNewsPage/>
                }
              ]
            },            {
              path: eventsRoute,
              children: [
                {
                  index: true,
                  element: <EventsPage/>
                },
                {
                  path: ':eventId',
                  element: <OneEventPage/>
                }
              ]
            },
          ]
        }
      ]
    }
  ]
}