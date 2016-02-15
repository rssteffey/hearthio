Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
    
    // Hue Testing
    var displayBridges = function(bridge) {
        console.log("Hue Bridges Found: " + JSON.stringify(bridge[0].ipaddress));
    };
    
    HueApi.nupnpSearch().then(displayBridges).done();
});