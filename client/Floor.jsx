// Floor component - represents a floor thumbnail to be rendered in the levels list
Floor = React.createClass({
  
  render: function() {

  	var floor_style = {
		backgroundImage:   'url(/assets/floor_thumbs/' + this.props.object.thumb + ')', //icon to render as a preview of the floorplan
		height: '100px',
		minHeight: '100px'
    };

    /*var id = {this.props.object.id};
*/
    return (
    	<div className="floor" >
			<input type="radio" id={this.props.object.id} name="floor_group"  value={this.props.object.id} />
			<label className="floor_radio" htmlFor= {this.props.object.id}  >
				<div style={floor_style}> </div>
				<h5> {this.props.object.name} </h5>
			</label>
    	</div>
    );
  }
});