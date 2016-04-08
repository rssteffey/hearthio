// Floors Panel
Floors_Panel = React.createClass({

  getFloors: function() {
    return [
      { _id: 1, id:1, thumb: 'floor1.png', name: 'House', active: true },
      { _id: 2, id:2, thumb: 'floor2.png', name: 'Patio', active: false }
    ];
  },

  render: function() {

    

    return (
      <div id="floors-panel" className="colorScheme2">
        <div id="floors">
          {this.renderFloors()}
        </div> 
      </div>
    );
  },
 
  renderFloors: function() {
    return this.getFloors().map((floor) => {
      return <Floor key={floor._id} object = {floor} /> ;
    });
  }

  
});