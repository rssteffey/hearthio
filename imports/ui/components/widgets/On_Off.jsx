import React, { Component } from 'react';

class On_Off extends Component {
  
  /*
  getInitialState() {
    return {
      status: this.props.object.status
    };
  }
  */
  
  constructor(props) {
    super(props);
    this.state = { status: props.object.status };
  }

  render() {

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
  }

  toggleStatus(event) {
    this.setState({status: event.target.checked});
    this.toggleLight();
  }

  toggleLight() {

    //Justin, API call here please.
    toggleDevice(this.state.status);
  }

}

export default On_Off;