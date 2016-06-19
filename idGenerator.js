
const mixedCaseIdGenerator = (length) => {
  const possiblities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let ans = '';
  for (let i = 0; i < length; i++) {
    ans += possiblities[Math.floor(Math.random() * possiblities.length)];
  }
  return ans;
};

exports.idGenerator = (type) => {
  let choosenType = type;
  if (!(choosenType === 'fitbit' || choosenType === 'jawbone')) {
    const types = ['fitbit', 'jawbone'];
    choosenType = types[Math.floor(Math.random() * types.length)];
  }
  if (choosenType === 'fitbit') {
    return mixedCaseIdGenerator(6).toUpperCase();
  } else if (choosenType === 'jawbone') {
    return mixedCaseIdGenerator(22);
  }
  return undefined;
};
