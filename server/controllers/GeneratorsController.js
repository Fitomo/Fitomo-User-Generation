const userDataGenerator = require('../generators/userGenerator').userDataGenerator;
const generateXActivitiesForUser = require('../generators/activityGenerator').generateXActivitiesForUser;
const fs = require('fs');

module.exports = {

  generateUsers: (req, res) => {
    // valid options are type, amountOfUsers, gender, difficulty, amountOfDays, bodyType
    console.log('request came in', req)
    const options = req.query;
    // send back formated json.
    var response = JSON.stringify(userDataGenerator(options.type, options.amountOfUsers, options.gender, options.difficulty, options.amountOfDays, options.bodyType), null, 4);
    res.end(response);
  },

  generateActivitesForUser: (req, res) => {
    // valid options are user and x
    const options = req.query;
    res.end(JSON.stringify(generateXActivitiesForUser(options.user, options.x)));
  },
};
