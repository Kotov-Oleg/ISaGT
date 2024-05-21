const Router = require('express')
const router = new Router()
const sliderController = require('../controllers/sliderController')
const authMiddleware = require('../middleware/authMiddleware')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/', sliderController.getSliders)
router.put('/reorder', sliderController.reorderSlider)

// router.get('/:id', newsController.getOneNews)
//
// router.post('/', checkAccess('news'), newsController.createNews)
//
// router.put('/', checkAccess('news'), newsController.updateNews)
//
// router.delete('/:id', checkAccess('news'), newsController.deleteNews)

module.exports = router