// Widget component - represents a widget to be rendered in the widgets list
Widget = React.createClass({
  
  render: function() {
    return (
      <div className="widget"> 
        <h3>{this.props.object.name}</h3>
        <p>Oh... this is awkward.  This widget doesn't seem to exist yet.</p>
      </div>
    );
  }
});