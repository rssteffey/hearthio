import React, { Component } from 'react';

import Filter from './Filter';


class NavBar extends Component {

   getFilters() {
      return [
         { _id: 1, filter_type: 'Lights', name: 'Lights', icon: 'bulb.svg', status: true },
         { _id: 2, filter_type: 'Sockets', name: 'Power', icon: 'plug.svg', status: false },
         { _id: 3, filter_type: 'Speakers', name: 'Audio', icon: 'speaker.svg', status: true },
         { _id: 4, filter_type: 'Thermostats', name: 'Climate', icon: 'thermometer.svg', status: false },
         { _id: 5, filter_type: 'Sensors', name: 'Sensors', icon: 'speedometer.svg', status: false },
      ];
   }

   renderFilters() {
      return this.getFilters().map((filter) => {
         return <Filter key={filter._id} object={filter} />;
      });
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
}

export default NavBar;
