const nameData = require('./data/nameData.js');
const getRandomElement = require('./utility/utilities.js').getRandomElement;

exports.nameGenerator = (gender) => {
  let choosenGender = gender;
  const genders = ['male', 'female'];
  if (!(choosenGender === 'male' || choosenGender === 'female')) {
    choosenGender = getRandomElement(genders);
  }
  if (choosenGender === 'female') {
    return `${getRandomElement(nameData.femaleFirstNames)} ${getRandomElement(nameData.lastNames)}`;
  } else if (choosenGender === 'male') {
    return `${getRandomElement(nameData.maleFirstNames)} ${getRandomElement(nameData.lastNames)}`;
  }
  return undefined;
};
