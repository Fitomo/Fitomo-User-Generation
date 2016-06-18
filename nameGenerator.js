const nameData = require('./nameData.js');

exports.nameGenerator = function(gender){
  if(!(gender === 'male' || gender === 'female')){
    const genders = ['male', 'female'];
    gender = genders[Math.floor(Math.random() * genders.length)];
  }
  if(gender === 'female'){
    return nameData.femaleFirstNames[Math.floor(Math.random() * nameData.femaleFirstNames.length)]
    + ' ' + nameData.lastNames[Math.floor(Math.random() * nameData.lastNames.length)];
  } else if(gender === 'male'){
    return nameData.maleFirstNames[Math.floor(Math.random() * nameData.maleFirstNames.length)]
     + ' ' + nameData.lastNames[Math.floor(Math.random() * nameData.lastNames.length)];
  }
}
