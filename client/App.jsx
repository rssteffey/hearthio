// App component - represents the whole app
App = React.createClass({
  getTasks: function() {
    return [
      { _id: 1, text: "Task 1: Make a Widget" },
      { _id: 2, text: "Task 2: Make it Heartio Trailer" },
      { _id: 3, text: "Task 3: Profit" }
    ];
  },
 
  renderTasks: function() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
 
  render: function() {
    return (
      <div className="container">
        <header>
          <h1>Todo List for Shawn</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});