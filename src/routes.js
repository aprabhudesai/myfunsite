const express         = require('express');
const router          = express.Router();
const homePageRouter  = require('./routers/web/home_page');
const appInfoRouter   = require('./routers/app_info');

router.use('/', homePageRouter);
router.use('/info', appInfoRouter);

module.exports = router;
