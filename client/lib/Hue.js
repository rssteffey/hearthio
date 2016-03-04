var ip = '';
var userDescription = 'Hearthio#BrowserName';
var displayError = function(err) {
  console.log(err);
};

getHueBridgeIpAddress = function() {
  
  var displayBridges = function(bridge) {
    console.log(bridge[0].ipaddress);
    ip = bridge[0].ipaddress;
  };
  
  hue.nupnpSearch().then(displayBridges).done();
};

createHueUser = function() {
  var hue = new HueApi();
  
  var displayUserResult = function(result) {
    console.log("Created user: " + result);
    Meteor.call('addUser', result, userDescription);
  };
  
  hue.registerUser(ip, userDescription)
    .then(displayUserResult)
    .fail(displayError)
    .done();
};

getHueUsers = function() {
  var userName = '';
  
  Meteor.call('getUsers', userDescription, function(error, result) {
    
    if (result.length < 1) {
      console.log('No Hue users');
      return;
    }
    
    var displayResult = function(result) {
      
      result.devices.forEach(function(user) {
        // Second condition makes sure that the username used for authentication
        // is saved to delete at the end
        if (user.name === userDescription && user.username != userName) {
          numberOfUsersLeftToDelete--;
          deleteHueUser(api, user.username);
        }
      });
      
      if (userName !== '') {
        // This hackiness is here to make sure the authenticated user is deleted after the rest of the users.
        while (numberOfUsersLeftToDelete > 1);
        deleteHueUser(api, userName);
      }
    };
    
    userName = result[0].username;
    var numberOfUsersLeftToDelete = result.length;
    var api = new HueApi(ip, userName);
    api.registeredUsers()
      .then(displayResult)
      .fail(displayError)
      .done();
    
    
  });
};

deleteHueUser = function(api, username) {
  var displayUserResult = function(result) {
    console.log("Deleted user: " + username + ' ' + JSON.stringify(result));
    if (result) {
      Meteor.call('deleteUser', userDescription);
    }
  };
  
  api.deleteUser(username)
    .then(displayUserResult)
    .fail(displayError)
    .done();
};

toggleLight = function(onOrOff) {
  var state = lightState.create();
  
  Meteor.call('getUsers', userDescription, function(error, result) {
    var userName = result[0].username;
    var displayResult = function(result) {
      console.log(result);
    };
    
    var stateToToggleTo = onOrOff ? state.on() : state.off();
    console.log(state);
    
    var api = new HueApi(ip, userName);
    api.setLightState(1, stateToToggleTo)
      .then(displayResult)
      .fail(displayError)
      .done();
  });
}