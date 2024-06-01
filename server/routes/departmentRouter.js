const Router = require('express')
const router = new Router()
const departmentController = require('../controllers/departmentController')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/', departmentController.getDepartments)

router.post('/', checkAccess('super'), departmentController.postDepartment)
router.put('/',  checkAccess('super'), departmentController.updateDepartment)

router.delete('/:id', checkAccess('super'), departmentController.deleteDepartment)

module.exports = router

