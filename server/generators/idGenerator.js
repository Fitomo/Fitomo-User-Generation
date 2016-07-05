const getRandomElement = require('./utility/utilities.js').getRandomElement;
// creates a random string of numbers and letters of a length provided as an argument
const mixedCaseIdGenerator = (length) => {
  const possiblities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let ans = '';
  for (let i = 0; i < length; i++) {
    ans += getRandomElement(possiblities);
  }
  return ans;
};
// generates fitbit and jawbone up id's
exports.idGenerator = (type) => {
  let choosenType = type.toLowerCase();
  // set the type to either fitbit or jawbone if no type is provided or an invalid type is provided
  if (!(choosenType === 'fitbit' || choosenType === 'jawbone')) {
    const types = ['fitbit', 'jawbone'];
    choosenType = getRandomElement(types);
  }
  if (choosenType === 'fitbit') {
    return mixedCaseIdGenerator(6).toUpperCase();
  } else if (choosenType === 'jawbone') {
    return mixedCaseIdGenerator(22);
  }
  return undefined;
};
