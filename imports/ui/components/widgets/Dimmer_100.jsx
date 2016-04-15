import React, { Component } from 'react';


class Dimmer_100 extends Component {
  /*
  getInitialState() {
    return {
      dim_value: this.props.object.dim_value
    };
  }
  */
  
  constructor(props) {
    super(props);
    this.state = { dim_value: props.object.dim_value };
  }

  render() {
    var flexStyle = {
      display: 'flex'
    };

    return (
      <div className="dimmer_100 widget">
        <h3>{this.props.object.name} </h3>
        <div style = {flexStyle} >
          <div id="slider">
            <div><p>{this.state.dim_value} %</p></div>
            <input type="range" id="dimRange" min="0" max="100" step="1" defaultValue={this.props.object.dim_value} onChange={this.dimChange} onInput = {this.dimChange} />
          </div>
        </div>
      </div>
    );
  }

  dimChange(event) {
    this.setState({dim_value: event.target.value});
    this.changeBrightness();
  }

  changeBrightness() {

    //Justin, API call here please.

  }
  
}

export default Dimmer_100;