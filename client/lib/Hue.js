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
    console.log("Created user: " + JSON.stringify(result));
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
  var api = new HueApi2(ip, '4e27a292405752cf515a4eb23b4a176c');
  
  var displayResult = function(result) {
    //console.log(result);
    result.devices.forEach(function (user) {
      if (user.name === userDescription) {
        //console.log(user.username);
        deleteHueUser(api, user.username);
      }
    });
  };
  
  api.registeredUsers().then(displayResult).done();
};

deleteHueUser = function(api, username) {
  var displayUserResult = function(result) {
    console.log("Deleted user: " + JSON.stringify(result));
  };
  
  var displayError = function(err) {
    console.log(err);
  };
  
  api.deleteUser(username)
    .then(displayUserResult)
    .fail(displayError)
    .done();
};