var moment = require('moment')
exports.activityGenerator = (user, date) => {
  // weighted towards low numbers
  const weighted = Math.pow(Math.random(), 2);
  // different aproach at bell curve
  const bell = ((Math.random() + Math.random() + Math.random()
  + Math.random() + Math.random() + Math.random()) - 3) / 3;
  // function to create bell curve
  const weightedRandom = (max, bellFactor) => {
    let num = 0;
    for (let i = 0; i < bellFactor; i++) {
      num += Math.random() * (max / bellFactor);
    }
    return num;
  };
  // object of daily Activity
  const dailyActivity = {
    date,
    distance: 0,
    steps: weightedRandom((20000 * user.difficulty), 4),
    calories: 0,
    totalSleep: 9 * (80 / (100 + Math.round(100 * bell))),
    restingHR: 0,
    weight: user.weight + (weighted * (0.25 + 1) - 0.5),
  };
  // set calories/distance/resting hr
  dailyActivity.calories = (dailyActivity.steps / 20) + (Math.random() * (20 + 5) - 5);
  dailyActivity.distance = Math.abs((dailyActivity.steps / 2000)
   + (Math.random() * (0.1 + 0.1) - 0.1));
  dailyActivity.restingHR = weightedRandom(120, 100) + (dailyActivity.weight * 0.05);
  let totalTime = 1440;
  const out = totalTime * (Math.random() * (1 - 0.90) + 0.90);
  totalTime = totalTime - out;
  const fat = totalTime * (Math.random() * (1 - 0.75) + 0.75);
  totalTime = totalTime - fat;
  const cardio = totalTime * (Math.random() * (1 - 0.8) + 0.8);
  totalTime = totalTime - cardio;
  const peak = totalTime;
  if (user.deviceType === 'fitbit') {
    // calorie count should be weighted by type, but currently it is just standarized
    dailyActivity.heartRateZones = [
    { caloriesOut: dailyActivity.calories * (out / 1440),
      max: 94,
      min: 30,
      minutes: out,
      name: 'Out of Range',
    },
    { caloriesOut: dailyActivity.calories * (fat / 1440),
      max: 132,
      min: 94,
      minutes: fat,
      name: 'Fat Burn',
    },
    { caloriesOut: dailyActivity.calories * (cardio / 1440),
      max: 160,
      min: 132,
      minutes: cardio,
      name: 'Cardio',
    },
    { caloriesOut: dailyActivity.calories * (peak / 1440),
      max: 220,
      min: 160,
      minutes: peak,
      name: 'Peak',
    },
    ];
  } else if (user.deviceType === 'jawbone') {
    const distributeSleep = (sleep) => {
      let totalSleep = sleep;
      const remSleep = totalSleep * (Math.random() * (0.25 - 0.20) + 0.20);
      const deepSleep = totalSleep * (Math.random() * (0.30 - 0.20) + 0.20);
      totalSleep = totalSleep - remSleep - deepSleep;
      const lightSleep = totalSleep;
      return {
        remSleep,
        lightSleep,
        deepSleep,
      };
    };
    dailyActivity.sleep = distributeSleep(dailyActivity.totalSleep);
  }
  return dailyActivity;
};
// give this function the user object (below the key)
exports.generateXActivitiesForUser = (user, x) => {
  let date;
  // if no activity exists create a new date
  if (user.activitiesLog.length === 0) {
    date = moment().format('YYYY MM DD');
  } else {
    // parse date string and add 1 to it.
    date = moment(user.activitiesLog[user.activitiesLog.length - 1].date, 'YYYY MM DD')
    .add('1', 'days');
  }
  // push amount of new activities
  for (let i = 0; i < x; i++) {
    user.activitiesLog
    .push(exports.activityGenerator(user, moment(date, 'YYYY MM DD').format('YYYY MM DD')));
    date = moment(date, 'YYYY MM DD').add(1, 'days');
  }
  // return the user object with the newly added activities
  return user;
};
