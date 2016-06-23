const generateName = require('./nameGenerator.js').nameGenerator;
const generateId = require('./idGenerator.js').idGenerator;
const generateDailyActivity = require('./activityGenerator.js').activityGenerator;
const getRandomElement = require('./utility/utilities.js').getRandomElement;
const generateFriends = require('./friendsGenerator.js').generateFriends;
const moment = require('moment');
const devices = ['fitbit', 'jawbone'];
const difficultyTypes = {
  light: 0.75,
  moderate: 1.00,
  heavy: 1.50,
};
const bodyTypes = {
  slim: 120,
  moderate: 150,
  heavy: 200,
  overweight: 250,
};
// the pseudoclasical user
function User(difficulty, gender, type, body) {
  this.difficulty = difficultyTypes[difficulty] || (Math.random() * 1.25);
  this.name = generateName(gender);
  this.deviceType = type || getRandomElement(devices);
  this.bodyType = body || getRandomElement(Object.keys(bodyTypes));
  this.weight = bodyTypes[this.bodyType];
  this.friends = [];
  this.activitiesLog = [];
}
// generate user data
exports.userDataGenerator = (type = '', amountOfUsers = 1, gender = '', difficulty = '', amountOfDays = '1', bodyType = '') => {
  const users = {};
  const userIds = [];
  // create random users with unique names/ and ids/ fill in difficutly
  for (let i = 0; i < amountOfUsers; i++) {
    const id = generateId(type);
    userIds.push(id);
    users[id] = new User(difficulty, gender, type, bodyType);
  }
  for (const key in users) {
    let date = moment().format('YYYYMMDD');
    users[key].friends = generateFriends(userIds);
    for (let j = 0; j < amountOfDays; j++) {
      users[key].activitiesLog.push(generateDailyActivity(users[key], moment(date, 'YYYYMMDD').format('YYYYMMDD')));
      users[key].weight = users[key].activitiesLog[users[key].activitiesLog.length - 1].weight;
      date = moment(date, 'YYYYMMDD').add(1, 'days');
    }
  }
  return users;
};
