const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.get('/', newsController.getNews)
router.post('/', newsController.createNews)

module.exports = router