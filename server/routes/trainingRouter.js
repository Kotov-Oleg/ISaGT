const Router = require('express')
const router = new Router()
const trainingController = require('../controllers/trainingController')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/:id',     trainingController.getTrainings)
router.get('/one/:id', trainingController.getOneTraining)

router.post('/', checkAccess('faculty'), trainingController.postTraining)
router.put('/',  checkAccess('faculty'), trainingController.updateTraining)

router.delete('/:id', checkAccess('faculty'), trainingController.deleteTraining)

module.exports = router

