import React, { Component } from 'react';

class Loading_Bar extends Component {

  constructor(props) {
      super(props);
      this.state = {
        completed: props.completed
      };
  }

/* I think this will update things properly? */
  componentWillReceiveProps(nextProps) {
      this.setState({
        completed: nextProps.completed
      })  
  }

  render() {

    var completed = this.props.completed;

    if (completed < 0)
      { completed = 0 };
    if (completed > 100)
      { completed = 100 };

    var style = {
      width: completed + '%'
    }

    return (
      <div id="loading-bar">
          <img src="/assets/misc/load_outline.png" id="loading-bar-outline"/>
          <div id="loading-bar-fill" style = {style} > </div>
      </div>
    );
  }
  
}

export default Loading_Bar;