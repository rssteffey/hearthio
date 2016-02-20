// Widget component - represents a widget to be rendered in the widgets list
Widget = React.createClass({
  propTypes: {
    // This component gets the widget to display through a React prop.
    // We can use propTypes to indicate it is required
    widget: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return (
      <div className="widget_item"> Generic Widget Placeholder</div>
    );
  }
});