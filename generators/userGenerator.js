const nameGenerator = require('./nameGenerator.js');
const idGenerator = require('./idGenerator.js');
const activityGenerator = require('./activityGenerator.js');
const moment = require('moment');
// graph friends randomly
const devices = ['fitbit', 'jawbone'];
const difficultyTypes = {
  light: 0.75,
  moderate: 1.00,
  heavy: 1.50,
};
const bodyType = {
  slim: 120,
  moderate: 150,
  heavy: 200,
  overweight: 250,
};
function User(difficulty, gender, type, body) {
  this.difficulty = difficultyTypes[difficulty] || (Math.random() * 1.25);
  this.name = nameGenerator.nameGenerator(gender);
  this.deviceType = type || devices[Math.floor(Math.random() * devices.length)];
  this.bodyType = body ||
  Object.keys(bodyType)[Math.floor(Object.keys(bodyType).length * Math.random())];
  this.weight = bodyType[this.bodyType] || bodyType[Object.keys(bodyType)
  [Math.floor(Object.keys(bodyType).length * Math.random())]];
  this.activitiesLog = [];
}

exports.userDataGenerator = (type = '', amountOfUsers = 1, gender = '', difficulty = '', amountOfDays = '1', bodyType = '') => {
  const users = {};
  // create random users with unique names/ and ids/ fill in difficutly
  for (let i = 0; i < amountOfUsers; i++) {
    const id = idGenerator.idGenerator(type);
    // make a new user at a unique id
    users[id] = new User(difficulty, gender, type);
  }
  let date = moment();
  for (let j = 0; j < amountOfDays; j++) {
    for (const key in users) {
      // console.log(users[key].activitiesLog);
      users[key].activitiesLog
      .push(activityGenerator.activityGenerator(users[key], moment(date, 'YYYY MM DD').format('YYYY MM DD')));
      users[key].weight = users[key].activitiesLog[users[key].activitiesLog.length - 1].weight;
    }
    date = moment(date, 'YYYY MM DD').add(1, 'days');
  }
  return users;
};
