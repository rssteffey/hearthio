// Meteor.methods definitions
Meteor.methods({
  addUser(username, userDescription) {
    User.insert({
      username: username,
      userDescription: userDescription,
      createdOn: new Date()
    });
  },
  
  getUsers(userDescription) {
    var users = User.find({userDescription: userDescription}).fetch();
    return users;
  },
  
  deleteUser(userDescription) {
    User.remove({userDescription: userDescription});
  }
});