const Router = require('express')
const router = new Router()
const newsTagController = require('../controllers/newsTagController')

router.get('/', newsTagController.getTags)

module.exports = router