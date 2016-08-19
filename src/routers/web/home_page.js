const express       = require('express');
const router        = express.Router();

const options = {
  root: __dirname + '/../../../public/html'
};

router.get('/', function (req, res) {
  res.type('html');
  res.sendFile('index.html', options);
});

module.exports = router;
