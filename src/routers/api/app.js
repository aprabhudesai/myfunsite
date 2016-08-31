const _                 = require('lodash');
const express           = require('express');
const router            = express.Router();

import { SECTIONS }     from '../../constants/sections';

router.get('/data', (req, res) => {
  let respData = {};
  console.log('Got Req:', req.query);
  if (!_.isEmpty(req.query)) {
    switch (req.query.section) {
      case SECTIONS.HEADER:
        respData.header = {
          title: 'Header Title From API'
        };
        break;
      case SECTIONS.FOOTER:
        respData.footer = {
          title: 'Footer Title From API'
        };
        break;
      default:
        break;
    }
  }
  console.log('Sending:', respData);
  res.send(respData);
});

module.exports = router;
