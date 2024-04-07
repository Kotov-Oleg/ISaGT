const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')
const authMiddleware = require('../middleware/authMiddleware')
const checkAccess = require('../middleware/checkAccessMiddleware')

router.get('/',               authMiddleware, adminController.getAdmins)
router.get('/access_options', authMiddleware, adminController.getAccessOptions)
router.get('/login_unique',   authMiddleware, adminController.isLoginUnique)

router.post('/', checkAccess('super'), adminController.postAdmin)
router.put('/',  checkAccess('super'), adminController.updateAdmin)

router.delete('/:id', checkAccess('super'), adminController.deleteAdmin)

module.exports = router