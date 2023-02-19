const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkRoleMiddleware')
const auth = require('../middleware/authMiddleware')

const Router = require('express')
const router = new Router()

router.post('/registration',checkRole('ADMIN'), userController.registration)
router.post('/login', userController.login)
router.get('/auth',  auth, userController.auth)
router.delete('', checkRole('ADMIN'), userController.delete)
router.get('/all', userController.getAll)


module.exports = router;