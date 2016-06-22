const express = require('express');
const app = express();

require('./routes/api-routes.js')(app);

app.get('*', (req, res) => {
  res.end('Invalid request');
});
app.listen(4000, () => {
  console.log('listening on port 4000');
});
