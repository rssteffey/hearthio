import React, { Component } from 'react';

import Filter from './Filter.jsx';


class Nav_Bar extends Component {

  getFilters() {
    return [
      { _id: 1, filter_type: 'Lights', name: 'Lights', icon:'bulb.png', status: true },
      { _id: 2, filter_type: 'Sockets', name: 'Power', icon:'plug.png',status: false },
      { _id: 3, filter_type: 'Speakers', name: 'Audio', icon:'speaker.png',status: true },
      { _id: 4, filter_type: 'Thermostats', name: 'Climate', icon:'flame.png',status: false },
      { _id: 5, filter_type: 'Sensors', name: 'Sensors', icon:'custom/14356.png',status: false },
    ];
  }

  render() {
    return (
      <div id="nav-bar" className="colorScheme2">
        <div id="settings" className="nav-item">
          <p> </p>
        </div>
        <div id="filters-container">
          {this.renderFilters()}
        </div> 
      </div>
    );
  }
 
  renderFilters() {
    return this.getFilters().map((filter) => {
      return <Filter key={filter._id} object = {filter} /> ;
    });
  }
  
}

export default Nav_Bar;