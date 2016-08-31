const express       = require('express');
const router        = express.Router();

router.get('/', (req, res) => {
  console.log('Getting App Info');
  const appInfo = {
    name: 'My Fun Site',
    description: 'This is just a hobby site to try new and exciting stuff'
  };
  res.send('<html><body><h1>App Is Running</h1></body></html>');
});

module.exports = router;
