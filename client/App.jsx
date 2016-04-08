// App component - represents the whole app
App = React.createClass({
  render: function() {
    return (
      <div id="container">
      	<House_Panel/>
      	<Nav_Bar/>
      	<Floors_Panel/>
      	<Object_Info/>
      </div>
    );
  }
});