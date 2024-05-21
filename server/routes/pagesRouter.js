const Router = require('express')
const pagesController = require('../controllers/pagesController')

const router = new Router()


router.get('/', pagesController.getPages)
router.get('/:page_name', pagesController.getPage)

module.exports = router