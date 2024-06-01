const Router = require('express')
const router = new Router()
const sliderController = require('../controllers/sliderController')

router.get('/:id', sliderController.getSliders)
router.put('/reorder', sliderController.reorderSlider)

module.exports = router