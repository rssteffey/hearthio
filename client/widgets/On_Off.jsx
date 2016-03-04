On_Off = React.createClass({
  
  getInitialState: function() {
    return {
      status: this.props.object.status
    };
  },

  render: function() {

    var flexStyle = {
      display: 'flex'
    };

    return (
      <div className="on_off widget">
        <h3>{this.props.object.name} </h3>
        <div style = {flexStyle} >
          <div id="toggler">
            {this.state.status && <div><p>On</p></div> }
            {!this.state.status && <div><p>Off</p></div> }
            <input type="checkbox" data-role="slider" id="on_off" checked={this.state.status} onChange={this.toggleStatus} />
          </div>
        </div>
      </div>
    );
  },

  toggleStatus: function(event) {
    this.setState({status: event.target.checked});
    this.toggleLight();
  },

  toggleLight: function() {

    //Justin, API call here please.
    toggleLight(this.state.status);
  }

});