import React, {FC, useEffect, useState} from 'react';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Импорт стилей
import './index.scss';
import './components/css-blocks/index.scss'

// Импорт маршрутов
import {adminRoutes} from "src/routes/authorizedRoutes";
import {defaultRoutes} from "src/routes/defaultRoutes";
import {unauthorizedRoutes} from "src/routes/unauthorizedRoutes";

// Импорт стора юзера
import {useUserStore} from "src/store/userStore";

// Импорт запросов
import {checkAuth} from "src/api/userAPI";
import Loader from "src/components/react-blocks/loader/Loader";


const App: FC = () => {
  const isAuth = useUserStore(state => state.isAuth)
  const login = useUserStore(state => state.login)
  const [isLoading, setIsLoading] = useState(true)

  // Автоматическая авторизация при наличии токена
  useEffect(() => {
    const token: string | null = localStorage.getItem('token')
    if (token) {
      checkAuth()
        .then(data => login(data))
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
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
        ...adminRoutes(isAuth),
        ...defaultRoutes()
      ])}
    />
  );
}

export default App;