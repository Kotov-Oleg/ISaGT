const jwt = require('jsonwebtoken')
var dayjs = require('dayjs')

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer sdkfbnaslnvlas
    if (!token) {
      throw 'empty token'
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded
    console.log('=================================')
    console.log('- check auth', dayjs().format('DD.MM.YYYY HH:mm:ss'), '|', req.user.name)
    next()
  } catch (e) {
    console.log(e)
    res.status(401).json({message: 'Пользователь не авторизован!'})
  }
}