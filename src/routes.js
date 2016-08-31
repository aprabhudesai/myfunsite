global.Promise = require('bluebird');
const express         = require('express');
const router          = express.Router();
const homePageRouter  = require('./routers/web/home_page');
const appInfoRouter   = require('./routers/app_info');
const appDataRouter   = require('./routers/api/app');

router.use('/', homePageRouter);
router.use('/info', appInfoRouter);
router.use('/api', appDataRouter);

module.exports = router;
