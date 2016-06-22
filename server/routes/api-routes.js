// var Controller = require(./../controllers/***)
const GeneratorsController = require('./../controllers/GeneratorsController.js');

module.exports = (app) => {
  app.get('/api/generateUsers', GeneratorsController.generateUsers);
  app.get('/api/generateActivitiesForUser', GeneratorsController.generateActivitesForUser);
};
