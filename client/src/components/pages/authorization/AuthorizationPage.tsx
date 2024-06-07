import React, {useEffect} from 'react';

import * as cl from './AuthotizationPage.module.scss'

import {SubmitHandler, useForm} from "react-hook-form";
import cn from "classnames";
import {redirect, useNavigate} from "react-router-dom";
import {adminRoute} from "src/routes/authorizedRoutes";
import {login} from "src/api/userAPI";
import {useUserStore} from "src/store/userStore";
import {useFacultyStore} from "src/store/facultyStore";

interface FormI {
  login: string
  password: string
}

const AuthorizationPage = () => {
  const navigate = useNavigate();
  const isAuth = useUserStore(state => state.isAuth)
  const authUser = useUserStore(state => state.login)

  const {register, handleSubmit} = useForm<FormI>({
    defaultValues: {
      login: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FormI> = async (data) => {
    console.log('data', data)
    login(data.login, data.password)
      .then((data) => {
        // Перенаправление на главную страницу админки при успешной авторизации
        authUser(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // TODO Открытие админки при авторизации
  // useEffect(() => {
  //   if (isAuth) {
  //     navigate('/' + adminRoute)
  //   }
  // }, [isAuth]);

  return (
    <div className={cl.page}>
      <div className={cl.title}>ИСиГТ админ</div>
      <form
        className={cl.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cl.label}>Логин</div>
        <input
          className={'input'}
          {...register('login')}
        />
        <div className={cl.label}>Пароль</div>
        <input
          type='password'
          className={'input'}
          {...register('password')}
        />
        <button
          type={'submit'}
          className={cn('button button_accept', cl.button)}
        >Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;