const express       = require('express');
const router        = express.Router();

router.get('/', function (req, res) {
  console.log('Getting App Info');
  res.send('App Info');
});

module.exports = router;
