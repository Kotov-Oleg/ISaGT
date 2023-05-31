require('dotenv').config()
const db = require('../db')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.CRYPT_SECRET_KEY)
const eventController = require('../controllers/eventController')
const eventName = 'user'
const jwt = require('jsonwebtoken')

// Генерация токена
const generateJwt = (id, surname, name, role) => {
  console.log('secret key', process.env.JWT_SECRET_KEY)
  return jwt.sign(
    {id, surname, name, role},
    process.env.JWT_SECRET_KEY,
    {expiresIn: '14d'}
  )
}

class UserController {
  // Авторизация пользователя
  async login(req, res) {
    console.log('request: login user')
    try {
      const {login, password} = req.body

      // Быстрое создание нового пароля
      // var pwd = Math.random().toString(36).slice(-8)
      // const encrypt = cryptr.encrypt(pwd)
      // console.log(pwd, encrypt)

      const query = `
        SELECT 
          l.id,
          l.surname,
          l.name,
          l.role
        FROM 
          login l 
        WHERE 
          l.email = '${login}' AND l.password = '${password}'
      `
      let user = await db.query(query)
      user = user.rows[0]
      console.log(user)
      // Проверка
      // if (user.password===null) {
      //   return res.status(500).json({ message: 'В доступе отказано!'})
      // }
      // if (cryptr.decrypt(user.password) !== password) {
      //   return res.status(500).json({ message: 'Неверный логин или пароль!'})
      // }
      
      // Генерируем токен
      // console.log('генерируем токен')
      // const token = generateJwt(user.id, user,surname, user.name, user.role)
      // console.log('token', token)
      return res.status(200).json(user)
    } catch (err) {
      return res.status(500).json({ message: 'Не удалось выполнить вход!'})
    }
  }


  // Проверка авторизованности пользователя
  async check(req, res, next) {
    console.log('update user jwt')
    const token = generateJwt(user.id, user,surname, user.name, user.role)
    return res.status(200).json({token})
  }
}

module.exports = new UserController()