const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')
const authMiddleware = require('../middleware/authMiddleware')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/',           authMiddleware, newsController.getNews)
router.get('/page_count', authMiddleware, newsController.getNewsPageCount)
router.get('/:id',        authMiddleware, newsController.getOneNews)

router.post('/', checkAccess('news'), newsController.createNews)

module.exports = router