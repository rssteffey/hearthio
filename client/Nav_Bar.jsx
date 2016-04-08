// App component - represents the whole app
Nav_Bar = React.createClass({

  getFilters: function() {
    return [
      { _id: 1, filter_type: 'Lights', name: 'Lights', icon:'bulb.png', status: true },
      { _id: 2, filter_type: 'Sockets', name: 'Power', icon:'plug.png',status: false },
      { _id: 3, filter_type: 'Speakers', name: 'Audio', icon:'speaker.png',status: true },
      { _id: 4, filter_type: 'Thermostats', name: 'Climate', icon:'flame.png',status: false },
      { _id: 5, filter_type: 'Sensors', name: 'Sensors', icon:'custom/14356.png',status: false },
    ];
  },

  render: function() {
    return (
      <div id="nav-bar" className="colorScheme2">
        <div id="settings" className="nav-item">
          <p> </p>
        </div>
        <div id="filters-container">
          {this.renderFilters()}
        </div> 
      </div>
    );
  },
 
  renderFilters: function() {
    return this.getFilters().map((filter) => {
      return <Filter key={filter._id} object = {filter} /> ;
    });
  }
  
 
  
});