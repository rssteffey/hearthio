Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
    ReactDOM.render(<Widgets_Panel />, document.getElementById("widgets-panel"));
});