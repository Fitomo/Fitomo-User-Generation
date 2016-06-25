const express = require('express');
const app = express();

require('./routes/api-routes.js')(app);

app.get('*', (req, res) => {
  res.end('Use routes /api/generateUsers?type=string&amountOfUsers=number&gender=string&difficulty=string&amountOfDays=number&bodyType=string & /api/generateActivitiesForUser?user=object&x=number');
});
app.listen(4000, () => {
  console.log('listening on port 4000');
});
