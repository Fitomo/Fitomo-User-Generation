import 'babel-polyfill';
const nameGenerators = require('../generators/nameGenerator.js');
const idGenerators = require('../generators/idGenerator.js');

const assert = require('chai').assert;

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
    it('should return a string of length 6 when fitbit is is provided as the first arguemn', function () {
      assert.equal(idGenerators.idGenerator('fitbit').length === 6, true);
    });
    it('should return a string of length 22 when passport is provided as the first arguemnt', function () {
      assert.equal(idGenerators.idGenerator('passport').length === 22, true);
    });
  });
});
