const nameGenerator = require('./nameGenerator.js');
const idGenerator = require('./idGenerator.js');
const activityGenerator = require('./activityGenerator.js');
// graph friends randomly
const devices = ['fitbit', 'jawbone'];
const difficultyTypes = {
  light: 0.75,
  moderate: 1,
  heavy: 1.25,
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
  this.activitiesLog = [];
  this.deviceType = type || devices[Math.floor(Math.random() * devices.length)];
  this.bodyType = body ||
  Object.keys(bodyType)[Math.floor(Object.keys(bodyType).length * Math.random())];
  this.weight = bodyType[this.bodyType] || bodyType[Object.keys(bodyType)
  [Math.floor(Object.keys(bodyType).length * Math.random())]];
}
const userDataGenerator = (type = '', amountOfUsers = 1, gender = '', difficulty = '', amountOfDays = '1', bodyType = '') => {
  const users = {};
  // create random users with unique names/ and ids/ fill in difficutly
  for (let i = 0; i < amountOfUsers; i++) {
    const id = idGenerator.idGenerator(type);
    // make a new user at a unique id
    users[id] = new User(difficulty, gender, type);
  }
  let date = new Date();
  for (let j = 0; j < amountOfDays; j++) {
    for (const key in users) {
      const dateString = date.toDateString();
      // console.log(users[key].activitiesLog);
      users[key].activitiesLog.push(activityGenerator.activityGenerator(users[key], dateString));
      users[key].weight = users[key].activitiesLog[users[key].activitiesLog.length - 1].weight;
    }
    date.setDate(date.getDate() + 1);
  }
  //
  //
  // for(var i = 0; i < days; i++){
  //   for(const key in users){
  //
  //   }
  // }
  return users;
};
// console.log(userDataGenerator(type, amountOfUsers, gender, difficulty, amountOfDays, bodyType));
console.log(userDataGenerator('', 2, '', '', 10, ''));

// create a random user id;
// create a object at user id with, device type,
// data, weight, height name (use name generator library)
// var currentDate = new Date();
// for(var i = 0; i < amountOfDays);
  // increment current date by 1 currentDate.setDate(currentDate.getDate() + 1);
