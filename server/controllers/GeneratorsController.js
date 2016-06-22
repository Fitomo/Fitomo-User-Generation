const userGenerator = require('../generators/userGenerator');
const activityGenerator = require('../generators/activityGenerator');

module.exports = {

  generateUsers: (req, res) => {
    // valid options are type, amountOfUsers, gender, difficulty, amountOfDays, bodyType
    const options = req.query;
    res.end(JSON.stringify(userGenerator.userDataGenerator(options.type, options.amountOfUsers, options.gender, options.difficulty, options.amountOfDays, options.bodyType)));
  },

  generateActivitesForUser: (req, res) => {
    // valid options are user and x
    const options = req.query;
    res.end(JSON.stringify(activityGenerator.generateXActivitiesForUser(options.user, options.x)));
  },
};
