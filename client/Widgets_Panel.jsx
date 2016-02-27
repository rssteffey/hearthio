// App component - represents the whole app
Widgets_Panel = React.createClass({

  getWidgets: function() {
    return [
      { _id: 1, widget_type: 'Hs_Picker', name: 'Hue and Saturation', hue: 42, sat: 98 },
      { _id: 2, widget_type: 'Hs_Picker', name: 'Hue and Saturation', hue: 76, sat: 12 },
      { _id: 3, widget_type: 'Dimmer_100', name: 'Dimmer', dim_value: 60 },
      { _id: 4, widget_type: 'Battery_Life', name: 'Battery Life', battery: .76 },
      { _id: 5, widget_type: 'Alarm_Tripped', name: 'Alarm Tripped', active: true },
    ];
  },

  render: function() {
    return (
      <div>
        <header>
          <h1>Widgets</h1>
        </header>

        <div id="widgets">
          {this.renderWidgets()}
        </div> 
      </div>
    );
  },
 
  renderWidgets: function() {
    return this.getWidgets().map((widget) => {

      MyComponent = this.getComponent(widget.widget_type);
      return <MyComponent key={widget._id} object = {widget} /> ;
    });
  },

  getComponent: function(widget_type) {
    /* Maintain an array of Widget types here for now*/
    var Components = new Array();
      Components['Widget']      =  Widget;
      Components['Hs_Picker']   =  Hs_Picker;
      Components['Dimmer_100']  =  Dimmer_100;

    if (typeof Components[widget_type] == "undefined")
    {
      return Components['Widget'];
    }

    return Components[widget_type];
  }
  
 
  
});