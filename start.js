const bodyParser  = require('body-parser');
const express     = require('express');
const app         = express();
const routes      = require('./src/routes');

app.use(bodyParser.json());
app.use('/', routes);

const server = app.listen(process.env.PORT || 9201, function () {
  console.log('Server listening on port', server.address().port);
});
