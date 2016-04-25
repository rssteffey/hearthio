import React, { Component } from 'react';
import Loading_Bar from './Loading_Bar.jsx';

class Loading_Panel extends Component {

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
        <Loading_Bar completed = {this.state.completed} />
      </div>
    );
  }
  
}

export default Loading_Panel;