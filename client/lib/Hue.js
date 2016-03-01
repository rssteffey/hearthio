var ip = '';
var userDescription = 'Hearthio#BrowserName';

getHueBridgeIpAddress = function() {
  
  var displayBridges = function(bridge) {
    console.log(bridge[0].ipaddress);
    ip = bridge[0].ipaddress;
  };
  
  HueApi.nupnpSearch().then(displayBridges).done();
};

createHueUser = function() {
  var hue = new HueApi2();
  
  var displayUserResult = function(result) {
    console.log("Created user: " + result);
    Meteor.call('addUser', result, userDescription);
  };
  
  var displayError = function(err) {
    console.log(err);
  };
  
  hue.registerUser(ip, userDescription)
    .then(displayUserResult)
    .fail(displayError)
    .done();
};

getHueUsers = function() {
  Meteor.call('getUsers', userDescription, function(error, result) {
    var userName = result[0].username;
    var api = new HueApi2(ip, userName);
    api.registeredUsers(function(error, result) {
        if (error) {
          throw error;
        }
        displayResult(result);
    });
    
    var displayResult = function(result) {
      result.devices.forEach(function (user) {
        if (user.name === userDescription) {
          deleteHueUser(api, user.username);
        }
      });
    };
    
  });
};

deleteHueUser = function(api, username) {
  var displayUserResult = function(result) {
    console.log("Deleted user: " + JSON.stringify(result));
    Meteor.call('deleteUser', userDescription);
  };
  
  var displayError = function(err) {
    console.log(err);
  };
  
  api.deleteUser(username)
    .then(displayUserResult)
    .fail(displayError)
    .done();
};