// App component - represents the whole app
App = React.createClass({
  getTasks: function() {
    return [
      { _id: 1, text: "Task 1: Make a Widget" },
      { _id: 2, text: "Task 2: Make it Heartio Trailer" },
      { _id: 3, text: "Task 3: Profit" }
    ];
  },
 
  renderTasks: function() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
  
  getHueBridgeIpAddress: function() {
    
    var displayBridges = function(bridge) {
      console.log(JSON.stringify(bridge[0].ipaddress));
      return [
        {_id: 1, text: JSON.stringify(bridge[0].ipaddress)}
      ];
    };
    
    
    
    //console.log(Meteor.wrapAsync(foo));
    /*
    HueApi.nupnpSearch(function(err, result) {
      if (err) {throw err;}
      console.log(JSON.stringify(bridge[0].ipaddress));
      return [
          {_id: 1, text: JSON.stringify(bridge[0].ipaddress)}
      ];
    });
    */
    
    console.log("getHueBridgeIpAddress");
    
  },
  
  renderHueBridgeIpAddress: function() {
    return this.getHueBridgeIpAddress().map((hue) => {
      return <Hue key={hue._id} ipAddress={hue} />
    })
  },
 
  render: function() {
    return (
      <div className="container">
        <header>
          <h1>Bridge IP:</h1> <Hue />
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});