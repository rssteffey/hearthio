// App component - represents the whole app
House_Panel = React.createClass({

  getDevices: function() {
    return [
              { 
                "id": "1", 
                "device_name": "Stairs", 
                "widgets": {
                  "On_Off" : { "_id": "1", "widget_type": "On_Off", "name": "On/Off", "status": "true" },
                  "Hs_Picker" : { "_id": "2", "widget_type": "Hs_Picker", "name": "Hue and Saturation", "hue": "76", "sat": "12" },
                  "Dimmer_100" : { "_id": "3", "widget_type": "Dimmer_100", "name": "Dimmer", "dim_value": "60" }
                },
                "style": {
                  "icon": "lightbulb_1",
                  "active_color_type": "bulb_value",
                  "inactive_color": "#999999"
                }
              },
              { 
                "id": "2", 
                "device_name": "Entry Hall Bathroom", 
                "widgets": {
                  "On_Off" : { "_id": "1", "widget_type": "On_Off", "name": "On/Off", "status": "true" },
                  "Dimmer_100" : { "_id": "3", "widget_type": "Dimmer_100", "name": "Dimmer", "dim_value": "60" }
                },
                "style": {
                  "icon": "lightbulb_1",
                  "active_color_type": "chosen_value",
                  "active_color": "#FFFFFF",
                  "inactive_color": "#999999"
                } 
              }
    ];
  },

  render: function() {
    return (
      <div id="house-panel" className="colorScheme1">
        <div id="device_list">
          {this.renderDevices()}
        </div>
      </div>
    );
  },
 
  renderDevices: function() {
    device_list = this.getDevices();
    devices = [];

    device_list.forEach(function(device) { 
      console.log(device.device_name); 
      devices.push( <Light_Device key={device.id} object = {active= 'false', chosen='false', device_name= device.device_name }/> );
    });
    
    return devices;
  }
  
 
  
});