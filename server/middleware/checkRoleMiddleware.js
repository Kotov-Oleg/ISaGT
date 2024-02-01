const db   = require('../db')
const jwt  = require('jsonwebtoken')
var dayjs = require('dayjs')

module.exports = function(role) {

  const checkMaster = async (role, decoded) => {
    let query = `SELECT DISTINCT master_id FROM department;`
    const master_id = await db.query(query)
    return master_id.rows.map(row => row.master_id.includes(decoded.id)).includes(true)
  }

  const check = async (role, decoded) => {
    if (role === 'мастер') return (await checkMaster(role, decoded))
    if (role.includes('+')) {
      let combo_role = role.split('+')
      let access = []
      for (let i in combo_role) {
        access.push(await check(combo_role[i], decoded))
      }
      return !access.includes(false)
    }
    return decoded.role === role
  }

  const denied = (res, role, decoded) => {
    console.log('=================================')
    console.log(dayjs().format('DD.MM.YYYY HH:mm:ss'), '|', decoded.name, 'как', role, 'ОТКАЗАНО')
    return res.status(403).json({ message: 'Отказано в доступе!'})
  }

  return async function (req, res, next) {
    if (req.method === 'OPTIONS') { next() }
    try {
      const token = req.headers.authorization.split(' ')[1] // Bearer sdkfbnaslnvlas
      if (!token) { throw 'empty token' }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      let access = []
      const admin = decoded.role === 'директор' || decoded.role === 'начальник'
      if (!admin) {
        if(Array.isArray(role)) {
          for (let i in role) {
            access.push(await check(role[i], decoded))
          }
          if (!access.includes(true)) return denied(res, role, decoded)
        } else {
          if (!(await check(role, decoded))) return denied(res, role, decoded)
        }
      }
      req.user = decoded
      console.log('=================================')
      console.log(dayjs().format('DD.MM.YYYY HH:mm:ss'), '|', req.user.name, 'как',
        Array.isArray(role)
        ? (admin ? role[0] : role[access.indexOf(true)])
        : role
      )
      next()
    } catch (err) {
      const message = 'Пользователь не авторизован!'
      console.log('\x1b[31m%s\x1b[0m', `${message}\n${err}`)
      res.status(401).json({message})
    }
  }
}