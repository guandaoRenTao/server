const objectController = require('../controllers/objectController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

router.post('/registration', checkRole('ADMIN'), objectController.registration)
router.delete('/', checkRole('ADMIN'), objectController.delete)
router.get('/', objectController.getAll)
router.get('/:id', objectController.getOne)

module.exports = router;