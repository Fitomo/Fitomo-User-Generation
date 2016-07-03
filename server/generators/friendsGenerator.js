exports.generateFriends = (userIdsArray) => {
  const friendsArray = [];
  for (let i = 0; i < userIdsArray.length; i++) {
    // ~1% of users are friends; change below expression to vary friends rate
    // friends are not bi-directional in the simulation; This is by design.
    if (Math.random() >= 0.99) {
      friendsArray.push(userIdsArray[i]);
    }
  }
  return friendsArray;
};
