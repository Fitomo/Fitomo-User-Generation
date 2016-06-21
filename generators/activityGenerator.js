exports.activityGenerator = (user, date) => {
  const weighted = Math.pow(Math.random(), 2);
  const bell = ((Math.random() + Math.random() + Math.random()
  + Math.random() + Math.random() + Math.random()) - 3) / 3;
  function weightedRandom(max, bellFactor) {
    let num = 0;
    for (let i = 0; i < bellFactor; i++) {
      num += Math.random() * (max / bellFactor);
    }
    return num;
  }
  const dailyActivity = {
    date,
    distance: 0,
    steps: weightedRandom((10000 * user.difficulty), 4),
    calories: 0,
    totalSleep: 9 * (80 / (100 + Math.round(100 * bell))),
    restingHR: 0,
    weight: user.weight + weighted * (.25 + 1) - .5,
  };
  console.log(dailyActivity.totalSleep);
  if (user.type === 'fitbit') {
    dailyActivity.activityLevels = {
      veryActive: 0,
      moderatelyActive: 0,
      sedentaryActive: 0,
    };
    dailyActivity.heartRateZones = [
    {},
    {},
    {},
    {},
    ];
  } else if (user.type === 'jawbone') {
    dailyActivity.times = {
      longestTimeActive: 0,
      longesttimeIdle: 0,
      activeTime: 0,
      inactiveTime: 0,
    };
    dailyActivity.sleep = {
      remSleep: 0,
      lightSleep: 0,
      deepSleep: 0,
    };
  }
  return dailyActivity;
};
