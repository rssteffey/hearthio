HS = React.createClass({
  getInitialState: function() {
      return {
          _id: 1,
          text: "Loading..."
      };
  },
  
  componentDidMount: function() {
    this.serverRequest = HueApi.nupnpSearch(function(err, result) {
      if (err) {throw err;}
      console.log(result[0].ipaddress);
      console.log("componentDidMount");
      
      this.setState({
        _id: 1,
        text: result[0].ipaddress
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  
  render: function() {
    return (
      <div>{this.state.text}</div>
    );
  }
});