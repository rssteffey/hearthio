import React, { Component } from 'react';
import LoadingBar from './LoadingBar.js';

class LoadingPanel extends Component {

  constructor(props) {
      super(props);
      this.state = {
        completed: 20
      };
  }

  /* I think this will update things properly? */
  componentWillReceiveProps(nextProps) {
      this.setState({
        completed: nextProps.completed
      })  
  }


  render() {
    return (
      <div id="load-page">
        <div className="loading-logo">
          <img src="/assets/logos/loading_logo.png"/>
        </div>
        <LoadingBar completed = {this.state.completed} />
      </div>
    );
  }
  
}

export default LoadingPanel;