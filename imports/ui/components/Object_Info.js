import React, { Component } from 'react';

import Widgets_Panel from './Widgets_Panel';


class Object_Info extends Component {
  render() {
    return (
      <div id="object-info" className="colorScheme2">
        <h2>Device Name</h2>
        <div id="widgets-panel">
          <Widgets_Panel />
        </div>
        <div id="object-stats">
          <h3>Device Properties</h3>
          <span>Model Number: 54h20xx891</span>
          <div id="quick-action-properties">

          </div>
        </div>
      </div>
    );
  }
}

export default Object_Info;