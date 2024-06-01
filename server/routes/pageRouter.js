const Router = require('express')
const pagesController = require('../controllers/pageController')

const router = new Router()


router.get('/one_page', pagesController.getPage)
router.get('/:id', pagesController.getPages)

module.exports = router