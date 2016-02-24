Hs_Picker = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    object: 5
  },
  
  render: function() {
    return (
      <div className="hs_picker widget">
        <h3>{this.props.object.name}</h3>
        <div><p>Hue: {this.props.object.hue}</p></div>
        <div><p>Sat: {this.props.object.sat}</p></div>
      </div>
    );
  }
});