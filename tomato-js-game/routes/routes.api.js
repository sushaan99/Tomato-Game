const router = require('express').Router();

const dataRouter = require('../modules/tomato/data.api')

router.use('/data', dataRouter);

module.exports = router;