exports.idGenerator = function(type){
  if(!(type === 'fitbit' || type === 'jawbone')){
    const types = ['fitbit', 'jawbone'];
    type = types[Math.floor(Math.random() * types.length)];
  }
  if(type === 'fitbit'){
    return mixedCaseIdGenerator(6).toUpperCase();
  } else if(type === 'jawbone'){
    return mixedCaseIdGenerator(22);
  }
}

const mixedCaseIdGenerator = function(length){
  const possiblities = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let ans = '';
  for(var i = 0; i < length; i++){
    ans += possiblities[Math.floor(Math.random() * possiblities.length)];
  }
  return ans;
}
