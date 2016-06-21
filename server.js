const express = require('express');
const app = express();
const userGenerator = require('./generators/userGenerator');
const activityGenerator = require('./generators/activityGenerator');

app.get('/api/generateUsers', (req, res) => {
  // get data from the req to determine arguments for userDataGenerator
  res.end(JSON.stringify(userGenerator.userDataGenerator('', 5, '', '', 10, '')));
});
app.get('/api/generateXActivitiesForUser', (req, res) => {
  // const user = req.data.user;
  // const x = req.data.x;
  // res.end(JSON.stringify(activityGenerator.generateXActivitiesForUser(user, x)));
});
app.get('*', (req, res) => {
  res.end('Invalid request');
});
app.listen(4000, () => {
  console.log('listening on port 4000');
});
