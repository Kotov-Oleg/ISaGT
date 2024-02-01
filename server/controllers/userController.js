const db = require('../db');

// Шифрование
const CryptoJS = require("crypto-js");
const KEY = process.env.CRYPT_SECRET_KEY
const jwt = require('jsonwebtoken')

// Форматирование JSON
const { Formatter } = require('fracturedjsonjs');
const formatter = new Formatter();

// Генерация токена
const generateJwt = (id, name, role) => {
  return jwt.sign(
    {id, name, role},
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
        SELECT id, role, password, surname || ' ' || name AS name
        FROM employee WHERE '${login}' IN (email, user_name) AND NOT fired;
      `
      const user = (await db.query(query)).rows[0]

      // Проверка
      if (user.password===null || (CryptoJS.AES.decrypt(user.password, KEY).toString(CryptoJS.enc.Utf8) !== password)) {
        return res.status(500).json({ message: 'Неверный логин или пароль!'})
      }
      
      // Генерируем токен
      const token = generateJwt(user.id, user.name, user.role)
      res.status(200).json({token})
    } catch (err) {
      res.status(500).json({ message: 'Не удалось выполнить вход!'})
    }
  }

  // Проверка авторизованности пользователя
  async check(req, res) {
    console.log('update user jwt\n')
    const token = generateJwt(req.user.id, req.user.name, req.user.role)
    res.status(200).json({token})
  }
}

module.exports = new UserController()