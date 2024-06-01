const db = require('../db/db');

// Шифрование
const CryptoJS = require("crypto-js");
const KEY = process.env.CRYPT_SECRET_KEY
const jwt = require('jsonwebtoken')

// Форматирование JSON
const { Formatter } = require('fracturedjsonjs');
const formatter = new Formatter();

// Генерация токена
const generateJwt = (id, surname, name, patronymic, access) => {
  console.log({id, surname, name, patronymic, access})
  return jwt.sign(
    {id, surname, name, patronymic, access},
    process.env.JWT_SECRET_KEY,
    {expiresIn: '14d'}
  )
}

class UserController {

  // Авторизация пользователя
  async login(req, res) {
    console.log('request: login user')
    console.log(`data:    ${formatter.Serialize(req.body)}`)
    try {
      const {login, password} = req.body
      const query = `
        SELECT a.id, password, surname, name, patronymic, json_build_object(
          'super',   a2.super,
          'faculty', a2.faculty,
          'slider',  a2.slider,
          'news',    a2.news,
          'pages',   a2.pages,
          'events',  a2.events,
          'faq',     a2.faq
        ) AS access
        FROM admin a JOIN public.access a2 on a.id = a2.id
        WHERE '${login}' = a.login;
      `
      const user = (await db.query(query)).rows[0]
      const psd = CryptoJS.AES.encrypt('admin', KEY).toString()
      console.log('password', psd)

      // Проверка
      if (user.password===null || (CryptoJS.AES.decrypt(user.password, KEY).toString(CryptoJS.enc.Utf8) !== password)) {
        return res.status(500).json({ message: 'Неверный логин или пароль!'})
      }
      
      // Генерируем токен
      const token = generateJwt(user.id, user.surname, user.name, user.patronymic, user.access)
      res.status(200).json({token})
    } catch (err) {
      res.status(500).json({ message: 'Не удалось выполнить вход!'})
    }
  }

  // Проверка авторизованности пользователя
  async check(req, res) {
    console.log('update user jwt\n')
    const token = generateJwt(req.user.id, req.user.surname, req.user.name, req.user.patronymic, req.user.access)
    res.status(200).json({token})
  }
}

module.exports = new UserController()