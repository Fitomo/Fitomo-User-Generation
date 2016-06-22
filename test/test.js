/* eslint-disable */
import 'babel-polyfill';
const nameGenerators = require('../server/generators/nameGenerator.js');
const idGenerators = require('../server/generators/idGenerator.js');
const activityGenerators = require('../server/generators/activityGenerator.js');
const userGenerators = require('../server/generators/userGenerator.js');
const moment = require('moment');

const assert = require('chai').assert;
const expect = require('chai').expect;

const fitbitTestUser = {
  SATYJH:
  {
    difficulty: 0.3189242197565051,
    name: 'Stannis Baratheon',
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
    name: 'Theon Greyjoy',
    activitiesLog: [],
    deviceType: 'jawbone',
    bodyType: 'moderate',
    weight: 149.2460759474208,
  },
};
const date = moment().format('YYYY MM DD');

describe('Generators', () => {
  describe('Name Generator', () => {
    it('should return a string', () => {
      assert.isString(nameGenerators.nameGenerator('male'));
    });
    it('should return a name greater than or equal to length 3', () => {
      assert.equal(nameGenerators.nameGenerator('male').length >= 3, true, 'Length of name is not greater than 3');
    });
    it('should return a first and last name seperated by a space', () => {
      assert.equal((nameGenerators.nameGenerator('female').match(/\s/g)||[]).length, 1, 'Does not contain a space');
    });
    it('should return a first and last even if a gender is not specified', () => {
      assert.equal(nameGenerators.nameGenerator().length >= 3, true, 'Did not return a name of proper format');
    });
  });
  describe('Id Generator', () => {
    it('should return a string', () => {
      assert.isString(idGenerators.idGenerator('fitbit'));
    });
    it('should return a string of length 6 when fitbit is is provided as the first arguemnt', () => {
      assert.equal(idGenerators.idGenerator('fitbit').length === 6, true);
    });
    it('should return a string of length 22 when jawbone is provided as the first arguemnt', () => {
      assert.equal(idGenerators.idGenerator('jawbone').length === 22, true);
    }); 
  });
  describe('User Generator', () => {
    it('should return an object', () => {
      assert.isObject(userGenerators.userDataGenerator('', 1, '', '', 10, ''));
    });
    it('should have keys: difficulty, name, deviceType, bodyType, weight, friends, activitiesLog', () => {
      const newUser = userGenerators.userDataGenerator('', 1, '', '', 10, '');
      for (const key in newUser) {
        expect(newUser[key]).to.contain.all.keys(['difficulty', 'name', 'deviceType', 'bodyType', 'weight', 'friends', 'activitiesLog']);
      }
    });
  });
  describe('Activity Generator', () => {
    it('should return an object', () => {
      assert.isObject(activityGenerators.activityGenerator(fitbitTestUser['SATYJH'], date));
    });
    it('should have keys: date, distance, steps, calories, totalSleep, restingHR, weight', () => {
      expect(activityGenerators.activityGenerator(fitbitTestUser['SATYJH'], date)).to.contain.all.keys(['date', 'distance', 'steps', 'calories', 'totalSleep', 'restingHR', 'weight']);
    });
    it('should have a heartRateZones property when called with a fitbit', () => {
      expect(activityGenerators.activityGenerator(fitbitTestUser['SATYJH'], date)).to.have.ownProperty('heartRateZones');
    });
    it('should have a heartRateZones property when called with a fitbit', () => {
      expect(activityGenerators.activityGenerator(jawboneTestUser['SATYJH'], date)).to.have.ownProperty('sleep');
    });
  });
  describe('Generate x activities for user', () => {
    it('should return an object', () => {
      assert.isObject(activityGenerators.generateXActivitiesForUser(fitbitTestUser['SATYJH'], 10));
    });
    it('should return 10 items in activity log', () => {
      assert.strictEqual(fitbitTestUser['SATYJH'].activitiesLog.length === 10, true, '10 items in activity log');
    });
  });
});
