exports.generateFriends = (userIdsArray) => {
  const friendsArray = [];
  for (let i = 0; i < userIdsArray.length; i++) {
    // ~25% of users are friends change to varry friends rate
    if (Math.random() >= 0.75) {
      friendsArray.push(userIdsArray[i]);
    }
  }
  return friendsArray;
};