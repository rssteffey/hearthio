import React, { Component } from 'react';

import House_Panel from './House_Panel.jsx';
import Nav_Bar from './Nav_Bar';
import Floors_Panel from './Floors_Panel';
import Object_Info from './Object_Info';


class App extends Component {
  constructor(props) {
    super(props);

    /*
    this.state = {
      hideCompleted: false,
    };
    */
  }
  
  render() {
    return (
      <div id="container">
      	<House_Panel/>
      	<Nav_Bar/>
      	<Floors_Panel/>
      	<Object_Info/>
      </div>
    );
  }
}

export default App;