Light_Device = React.createClass({
  
  getInitialState: function() {
    return {
      active: this.props.object.active,
      selected: this.props.object.chosen,
      name: this.props.object.device_name,
    };
  },

  render: function() {

    var flexStyle = {
      display: 'flex'
    };

    return (
      <div className="light device">
        <h3>{this.state.name} </h3>
        <div style = {flexStyle} >
          <div id="toggler">
            {this.state.active && <div><p>On</p></div> }
            {!this.state.active && <div><p>Off</p></div> }
            <input type="radio" checked={this.state.active} name="devices" onChange={this.toggleStatus} />
          </div>
        </div>
      </div>
    );
  },

  toggleStatus: function(event) {
    this.setState({active: event.target.checked});
    this.updateWidgetBoard();
  },

  updateWidgetBoard: function() {
    console.log('Updating widget board accordingly');
  }

});