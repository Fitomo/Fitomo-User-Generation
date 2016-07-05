const express = require('express');
const app = express();
const path = require('path');

require('./routes/api-routes.js')(app);

app.use('/', express.static(path.join(__dirname, '/../client')));
app.listen(4000, () => {
  console.log('listening @:' + process.env.IP + 'on port: 4000');
});
