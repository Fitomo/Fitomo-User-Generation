const nameData = require('./data/nameData.js');

exports.nameGenerator = (gender) => {
  let choosenGender = gender;
  if (!(choosenGender === 'male' || choosenGender === 'female')) {
    const genders = ['male', 'female'];
    choosenGender = genders[Math.floor(Math.random() * genders.length)];
  }
  if (choosenGender === 'female') {
    return `${nameData.
      femaleFirstNames[Math.floor(Math.random() * nameData.femaleFirstNames.length)]}`
      + ` ${nameData.lastNames[Math.floor(Math.random() * nameData.lastNames.length)]}`;
  } else if (choosenGender === 'male') {
    return `${nameData.
    maleFirstNames[Math.floor(Math.random() * nameData.maleFirstNames.length)]}` +
    ` ${nameData.lastNames[Math.floor(Math.random() * nameData.lastNames.length)]}`;
  }
  return undefined;
};
