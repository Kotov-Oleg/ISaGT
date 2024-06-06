import React, {FC, useEffect, useState} from 'react';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Импорт стилей
import './index.scss';
import './components/css-blocks/index.scss'

// Импорт маршрутов
import {adminRoutes} from "src/routes/authorizedRoutes";
import {unauthorizedRoutes} from "src/routes/unauthorizedRoutes";

// Импорт стора юзера
import {useUserStore} from "src/store/userStore";

// Импорт запросов
import {checkAuth} from "src/api/userAPI";
import Loader from "src/components/react-blocks/loader/Loader";
import {useFacultyStore} from "src/store/facultyStore";
import {getFaculties} from "src/api/facultyAPI";
import {defaultRoutes} from "src/routes/defaultRoutes";



const App: FC = () => {
  const isAuth = useUserStore(state => state.isAuth)
  const login = useUserStore(state => state.login)

  const faculties = useFacultyStore(state => state.faculties)
  const loadFaculties = useFacultyStore(state => state.loadFaculties)

  console.log('faculties', faculties)
  // Загрузка страницы
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Автоматическая авторизация при наличии токена
    const token: string | null = localStorage.getItem('token')
    // Массив всех промисов
    const promises = [];

    if (token) {
      const authPromise = checkAuth().then(data => login(data))
      promises.push(authPromise)
    }

    // Загрузка факультетов
    const facultiesPromise = getFaculties()
      .then(res => {
        console.log('res', res)
        loadFaculties(res)
      })
    promises.push(facultiesPromise)

    // Выполняем все запросы и выключаем загрузку
    Promise.all(promises).finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <Loader/>
    )
  }

  return (
    <RouterProvider
      router={createBrowserRouter([
        ...unauthorizedRoutes(isAuth),
        ...defaultRoutes(faculties),
        ...adminRoutes(isAuth, faculties)
      ])}
    />
  );
}

export default App;