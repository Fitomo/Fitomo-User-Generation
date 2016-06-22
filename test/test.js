import 'babel-polyfill';
const nameGenerators = require('../generators/nameGenerator.js');
const idGenerators = require('../generators/idGenerator.js');
const activityGenerators = require('../generators/activityGenerator.js');
const userGenerators = require('../generators/userGenerator.js');
const moment = require('moment');

const assert = require('chai').assert;
const expect = require('chai').expect;

const fitbitTestUser = {
  SATYJH:
  {
    difficulty: 0.3189242197565051,
    name: 'STACEE BERND',
    activitiesLog: [],
    deviceType: 'fitbit',
    bodyType: 'moderate',
    weight: 149.2460759474208,
  },
};
const jawboneTestUser = {
  SATYJH:
  {
    difficulty: 0.3189242197565051,
    name: 'STACEE BERND',
    activitiesLog: [],
    deviceType: 'jawbone',
    bodyType: 'moderate',
    weight: 149.2460759474208,
  },
};
const date = moment().format('YYYY MM DD');

describe('Generators', function() {
  describe('Name Generator', function () {
    it('should return a string', function () {
      assert.isString(nameGenerators.nameGenerator('male'));
    });
    it('should return a name greater than or equal to length 3', function () {
      assert.equal(nameGenerators.nameGenerator('male').length >= 3, true, 'Length of name is not greater than 3');
    });
    it('should return a first and last name seperated by a space', function () {
      assert.equal((nameGenerators.nameGenerator('female').match(/\s/g)||[]).length, 1, 'Does not contain a space');
    });
    it('should return a first and last even if a gender is not specified', function () {
      assert.equal(nameGenerators.nameGenerator().length >= 3, true, 'Did not return a name of proper format');
    });
  });
  describe('Id Generator', function () {
    it('should return a string', function () {
      assert.isString(idGenerators.idGenerator('fitbit'));
    });
    it('should return a string of length 6 when fitbit is is provided as the first arguemnt', function () {
      assert.equal(idGenerators.idGenerator('fitbit').length === 6, true);
    });
    it('should return a string of length 22 when jawbone is provided as the first arguemnt', function () {
      assert.equal(idGenerators.idGenerator('jawbone').length === 22, true);
    }); 
  });
  describe('User Generator', function () {
    it('should return an object', function () {
      assert.isObject(userGenerators.userDataGenerator('', 1, '', '', 10, ''));
      console.log(userGenerators.userDataGenerator('', 40, '', '', 1, ''));
    });
  });
  describe('Activity Generator', function () {
    it('should return an object', function () {
      assert.isObject(activityGenerators.activityGenerator(fitbitTestUser['SATYJH'], date));
    });
    it('should have values for the properties: date, distance, steps, calories, totalSleep, restingHR, weight', function () {
      assert.isObject(activityGenerators.activityGenerator(fitbitTestUser['SATYJH'], date));
    });
    it('should have a heartRateZones property when called with a fitbit', function(){
      expect(activityGenerators.activityGenerator(fitbitTestUser['SATYJH'], date)).to.have.ownProperty('heartRateZones');
    });
    it('should have a heartRateZones property when called with a fitbit', function(){
      expect(activityGenerators.activityGenerator(jawboneTestUser['SATYJH'], date)).to.have.ownProperty('sleep');
    });
    console.log(activityGenerators.activityGenerator(fitbitTestUser['SATYJH'], date));
  });
  describe('Generate x activities for user', function () {
    it('should return an object', function () {
      assert.isObject(activityGenerators.generateXActivitiesForUser(fitbitTestUser['SATYJH'], 10));
    });
    it('should return 10 items in activity log', function () {
      assert.strictEqual(fitbitTestUser['SATYJH'].activitiesLog.length === 10, true, '10 items in activity log');
    });
  });
});
