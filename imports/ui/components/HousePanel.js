import React, { Component } from 'react';

import LightDevice from './LightDevice';


class HousePanel extends Component {
   getDevices() {
      return [
         {
            id: 1,
            deviceName: 'Stairs',
            widgets: {
               OnOff: { _id: 1, widget_type: 'OnOff', name: 'On/Off', status: true },
               Hs_Picker: { _id: 2, widget_type: 'HsPicker', name: 'Hue and Saturation', hue: 76, sat: 12 },
               Dimmer_100: { _id: 3, widget_type: 'Dimmer100', name: 'Dimmer', dim_value: 60 },
            },
            style: {
               icon: 'lightbulb_1',
               active_color_type: 'bulb_value',
               inactive_color: '#999999',
            },
         },
         {
            id: 2,
            deviceName: 'Entry Hall Bathroom',
            widgets: {
               OnOff: { _id: 1, widget_type: 'On_Off', name: 'On/Off', status: true },
               Dimmer100: { _id: 3, widget_type: 'Dimmer100', name: 'Dimmer', dim_value: 60 },
            },
            style: {
               icon: 'lightbulb_1',
               active_color_type: 'chosen_value',
               active_color: '#FFFFFF',
               inactive_color: '#999999',
            },
         },
         {
            id: 3,
            deviceName: 'Living Room Lamp 1',
            widgets: {
               OnOff: { _id: 1, widget_type: 'OnOff', name: 'On/Off', status: true },
               Dimmer100: { _id: 3, widget_type: 'Dimmer100', name: 'Dimmer', dim_value: 60 },
            },
            style: {
               icon: 'lightbulb_1',
               active_color_type: 'chosen_value',
               active_color: '#FFFFFF',
               inactive_color: '#999999',
            },
         },
      ];
   }


   renderDevices() {
      const deviceList = this.getDevices();
      const devices = [];

      deviceList.forEach(device => {
         console.log(device.deviceName);

         let deviceDetails = { active: 'false', chosen: 'false', deviceName: device.deviceName };
         devices.push(<LightDevice key={device.id} object={deviceDetails} />);
      });

      return devices;
   }


   render() {
      return (
         <div id="house-panel" className="colorScheme1">
            <div id="pan_and_scan">
               <div id="device_list">
                  {this.renderDevices()}
               </div>
            </div>
         </div>
      );
   }

}

export default HousePanel;
