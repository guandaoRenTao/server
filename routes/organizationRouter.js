const organizationController = require('../controllers/organizationController')
const checkRole = require('../middleware/checkRoleMiddleware')

const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration', checkRole('ADMIN'), organizationController.registration)
router.delete('/',checkRole('ADMIN'), organizationController.delete)
router.get('/', organizationController.getAll)
router.get('/:id', organizationController.getOne)

module.exports = router;