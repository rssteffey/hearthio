import React, { Component } from 'react';

import WidgetsPanel from './WidgetsPanel';


class ObjectInfo extends Component {
   render() {
      return (
         <div id="object-info" className="colorScheme2">
            <h2>Device Name</h2>
            <div id="widgets-panel">
               <WidgetsPanel />
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

export default ObjectInfo;
