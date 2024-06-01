const Router = require('express')
const router = new Router()
const facultyController = require('../controllers/facultyController')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/', facultyController.getFaculties)

router.post('/', checkAccess('super'), facultyController.postFaculty)
router.put('/',  checkAccess('super'), facultyController.updateFaculty)

router.delete('/:id', checkAccess('super'), facultyController.deleteFaculty)

module.exports = router

