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
// the pseudoclasical user
function User(difficulty, gender, type, body) {
  this.difficulty = difficultyTypes[difficulty] || (Math.random() * 1.25);
  this.name = nameGenerator.nameGenerator(gender);
  this.deviceType = type || devices[Math.floor(Math.random() * devices.length)];
  this.bodyType = body ||
  Object.keys(bodyType)[Math.floor(Object.keys(bodyType).length * Math.random())];
  this.weight = bodyType[this.bodyType] || bodyType[Object.keys(bodyType)
  [Math.floor(Object.keys(bodyType).length * Math.random())]];
  this.friends = [];
  this.activitiesLog = [];
}
// function to populate user's friends array with other existing users
const createFriends = (userIdsArray) => {
  const friendsArray = [];
  for (let i = 0; i < userIdsArray.length; i++) {
    // ~25% of users are friends change to varry friends rate
    if (Math.random() >= 0.75) {
      friendsArray.push(userIdsArray[i]);
    }
  }
  return friendsArray;
};
// generate user data
exports.userDataGenerator = (type = '', amountOfUsers = 1, gender = '', difficulty = '', amountOfDays = '1', bodyType = '') => {
  const users = {};
  let date = moment().format('YYYY MM DD');
  // create random users with unique names/ and ids/ fill in difficutly
  const userIds = [];
  for (let i = 0; i < amountOfUsers; i++) {
    const id = idGenerator.idGenerator(type);
    userIds.push(id);
    // make a new user at a unique id
    users[id] = new User(difficulty, gender, type);
  }
  for (let j = 0; j < amountOfDays; j++) {
    for (const key in users) {
      users[key].friends = createFriends(userIds);
      users[key].activitiesLog
      .push(activityGenerator.activityGenerator(users[key], moment(date, 'YYYY MM DD').format('YYYY MM DD')));
      users[key].weight = users[key].activitiesLog[users[key].activitiesLog.length - 1].weight;
    }
    date = moment(date, 'YYYY MM DD').add(1, 'days');
  }
  return users;
};

