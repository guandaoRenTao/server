const organizationReportController = require('../controllers/organizationReportController')
const checkRole = require('../middleware/checkRoleMiddleware')

const Router = require('express')
const router = new Router()

// ограничение доступа под вопросом
router.post('/registration',  organizationReportController.registration)
router.delete('/',checkRole('ADMIN'), organizationReportController.delete)
router.get('/', organizationReportController.getAll)
router.get('/:id', organizationReportController.getOne)

module.exports = router;