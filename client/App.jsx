// App component - represents the whole app
App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div id="widgets-panel">
          <Widgets_Panel />
        </div>
      </div>
    );
  }
});