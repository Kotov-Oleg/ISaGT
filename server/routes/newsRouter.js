const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')
const authMiddleware = require('../middleware/authMiddleware')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/', newsController.getNews)
router.get('/admin', newsController.getNewsAdmin)
router.get('/page_count', newsController.getNewsPageCount)
router.get('/:id', newsController.getOneNews)

router.post('/', checkAccess('news'), newsController.createNews)
// router.post('/', newsController.createNews)

module.exports = router