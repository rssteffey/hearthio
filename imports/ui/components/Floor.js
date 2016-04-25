import React, { Component } from 'react';

// Floor component - represents a floor thumbnail to be rendered in the levels list
class Floor extends Component {

   constructor(props) {
      super(props);
      this.state = {
         id: props.object.id,
         thumb: props.object.thumb,
         name: props.object.name,
      };
   }

   render() {
      const floorStyle = {
         backgroundImage: `url(/assets/floor_thumbs/${this.state.thumb})`, // icon to render as a preview of the floorplan
         height: '100px',
         minHeight: '100px',
      };

      // var id = {this.props.object.id};
      return (
         <div className="floor" >
            <input type="radio" id={this.props.object.id} name="floor_group" value={this.state.id} />
            <label className="floor_radio" htmlFor={this.state.id} >
               <div style={floorStyle}> </div>
               <h5> {this.state.name} </h5>
            </label>
         </div>
      );
   }
}

export default Floor;
