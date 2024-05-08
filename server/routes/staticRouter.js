const Router = require('express')
const router = new Router()
const StaticController = require('../controllers/StaticController')

router.get('/', StaticController.getStatic)

module.exports = router