const bodyParser  = require('body-parser');
const express     = require('express');

const app = express();

app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 9001, function () {
  console.log('Server listening on port', server.address().port);
});
