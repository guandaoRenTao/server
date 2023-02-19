const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter')
const objectRouter = require('./objectRouter')
const organizationRouter = require('./organizationRouter')
const anouncmentRouter = require('./anouncmentRouter')
const projectRouter = require('./projectRouter')
const taskRouter = require('./taskRouter')
const facilityRouter = require('./facilityRouter')
const organizationReportRouter = require('./organizationReportRouter')
const cameraRouter = require('./cameraRouter')
const metersDataRouter = require('./metersDataRouter')

router.use('/user', userRouter);
router.use('/object', objectRouter);
router.use('/organization', organizationRouter);
router.use('/anouncment', anouncmentRouter);
router.use('/project', projectRouter);
router.use('/task', taskRouter);
router.use('/facility', facilityRouter);
router.use('/organizationReport', organizationReportRouter);
router.use('/camera', cameraRouter);
router.use('/metersData', metersDataRouter);

module.exports = router;