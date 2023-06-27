import React, { useContext } from 'react';
import { useState } from 'react';

// импорт css
import './Authorization.css'

import { Context } from '../../index';
import {observer} from 'mobx-react-lite'
import {login} from '../../http/userAPI';

// функциональный компонент страницы
const Authorization = observer(() => {
  const {user} = useContext(Context)
  console.log(user)

  // стейт авторизации
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const singIn = async () => {
    try {
      if (!userName || !password) {
        alert('Заполните все поля')
        return
      }

      let data = await login(userName, password)
      user.setIsAuth(true)
      console.log('user', user)
      console.log('data', data)
      user.setUser(data)
      
    } catch (e) {
      console.log(e)
      alert(e)
    }
  }

  return (
    <div className='auth-main'>


      <div className='auth-sub'>


        {/* Заголовок */}
        <div className='pageName mb-4'>РГГМУ</div>
        {/* Форма авторизации */}
        <div className='auth-form p-3'>
          <div className="row g-3 pb-2 align-items-center">
            <label htmlFor="inputLogin" className='labelForm'>Логин</label>
          </div>
          <div className="grid g-3 align-items-center pb-3">
            <input
              autoComplete="off"
              type="text" 
              id="inputLogin" 
              className="form-control" 
              aria-describedby="passwordHelpInline"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="row g-3 pb-2 align-items-center">
            <label htmlFor="inputPassword6" className='labelForm'>Пароль</label>
          </div>

          <div className="grid g-3 pb-3 align-items-center justify-items-center">
            <input
              type="password" 
              id="inputPassword6" 
              className="form-control" 
              aria-describedby="passwordHelpInline"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="row g-3 align-items-center justify-content-center">
          <button
            className='button-enter' 
            type='submit' 
            onClick={() => singIn()}
          >
            Войти
          </button>
          </div>

        </div>
        {/* Форма авторизации */}

      </div>
    </div>
  )
})


export default Authorization;


