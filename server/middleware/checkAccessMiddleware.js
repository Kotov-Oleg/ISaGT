const db = require('../db')
const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')

module.exports = function(access) {
  const denied = (res, value, decoded) => {
    console.log('=================================')
    console.log(dayjs().format('DD.MM.YYYY HH:mm:ss'), '|', decoded.name, 'для модуля', value, 'ОТКАЗАНО')
    return res.status(403).json({ message: 'Отказано в доступе!'})
  }

  return async function (req, res, next) {
    if (req.method === 'OPTIONS') { next() }
    try {
      const token = req.headers.authorization.split(' ')[1] // Bearer sdkfbnaslnvlas
      if (!token) { throw 'empty token' }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      if (!decoded.access['super'] && !decoded.access[access]) {
        return denied(res, access, decoded)
      }
      req.user = decoded
      console.log('=================================')
      console.log(dayjs().format('DD.MM.YYYY HH:mm:ss'), '|', req.user.name, 'для модуля', access)
      next()
    } catch (err) {
      const message = 'Пользователь не авторизован!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(401).json({message})
    }
  }
}