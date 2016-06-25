exports.generateFriends = (userIdsArray) => {
  const friendsArray = [];
  for (let i = 0; i < userIdsArray.length; i++) {
    // ~1% of users are friends change to vary friends rate
    // also current friends are not bi-directional in the simulation
    // fix this later if time allows
    if (Math.random() >= 0.99) {
      friendsArray.push(userIdsArray[i]);
    }
  }
  return friendsArray;
};
