const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer
    if (!token) { throw 'empty token' }
    req.user = jwt.verify(token, process.env.JWT_SECRET_KEY) // decoded
    console.log('=================================')
    console.log(dayjs().format('DD.MM.YYYY HH:mm:ss'), '|', req.user.name)
    next()
  } catch (err) {
    const message = 'Пользователь не авторизован!'
    console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
    res.status(401).json({message})
  }
}