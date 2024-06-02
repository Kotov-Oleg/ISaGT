const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/', newsController.getNews)
router.get('/page_count', newsController.getNewsPageCount)
router.get('/:id', newsController.getOneNews)

router.post('/', checkAccess('news'), newsController.createNews)
router.put('/', checkAccess('news'), newsController.updateNews)
router.delete('/:id', checkAccess('news'), newsController.deleteNews)

module.exports = router