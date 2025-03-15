const Router = require('express');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const deviceRouter = require('./deviceRouter')


const router = Router()

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router