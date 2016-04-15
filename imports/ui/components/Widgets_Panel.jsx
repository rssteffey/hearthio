import React, { Component } from 'react';

import Widget from './widgets/Widget.jsx';
import On_Off from './widgets/On_Off.jsx';
import Hs_Picker from './widgets/Hs_Picker.jsx';
import Dimmer_100 from './widgets/Dimmer_100.jsx';


class Widgets_Panel extends Component {
  getWidgets() {
    return [
      { _id: 1, widget_type: 'On_Off', name: 'On/Off', status: true },
      { _id: 2, widget_type: 'Hs_Picker', name: 'Hue and Saturation', hue: 76, sat: 12 },
      { _id: 3, widget_type: 'Dimmer_100', name: 'Dimmer', dim_value: 60 },
      { _id: 4, widget_type: 'Battery_Life', name: 'Battery Life', battery: .76 },
      { _id: 5, widget_type: 'Alarm_Tripped', name: 'Alarm Tripped', active: true },
    ];
  }

  render() {
    return (
        <div id="widgets">
          {this.renderWidgets()}
        </div>
    );
  }
 
  renderWidgets() {
    return this.getWidgets().map((widget) => {

      let MyComponent = this.getComponent(widget.widget_type);
      return <MyComponent key={widget._id} object = {widget}/> ;
    });
  }

  getComponent(widget_type) {
    /* Maintain an array of Widget types here for now*/
    var Components = new Array();
      Components['Widget']      =  Widget;
      Components['On_Off']      =  On_Off;
      Components['Hs_Picker']   =  Hs_Picker;
      Components['Dimmer_100']  =  Dimmer_100;

    if (typeof Components[widget_type] == "undefined")
    {
      return Components['Widget'];
    }

    return Components[widget_type];
  }
  
 
  
}

export default Widgets_Panel;