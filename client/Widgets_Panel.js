// App component - represents the whole app
Widgets_Panel = React.createClass({
  getWidgets: function() {
    return [
      { _id: 1, widget_type: "Hs_Picker" },
      { _id: 2, widget_type: "Hs_Picker" }
    ];
  },
 
  renderWidgets: function() {
    return this.getWidgets().map((widget) => {
      return <widget.widget_type key={widget._id} widget={widget} />;
    });
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
  }
});