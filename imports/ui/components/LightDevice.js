import React, { Component } from 'react';


class LightDevice extends Component {
   /*
   Constructor below replaces this
   https://facebook.github.io/react/docs/reusable-components.html#es6-classes
   getInitialState() {
   return {
   active: this.props.object.active,
   selected: this.props.object.chosen,
   name: this.props.object.device_name,
   };
   }
   */

   constructor(props) {
      super(props);
      this.state = {
         active: props.object.active,
         selected: props.object.chosen,
         name: props.object.device_name,
      };
   }


   toggleStatus(event) {
      this.setState({ active: event.target.checked });
      this.updateWidgetBoard();
   }


   updateWidgetBoard() {
      console.log('Updating widget board accordingly');
   }


   render() {
      const flexStyle = {
         display: 'flex',
      };

      return (
         <div className="light device">
            <h3>{this.state.name} </h3>
            <div style={flexStyle} >
               <div id="toggler">
                  {this.state.active && <div><p>On</p></div>}
                  {!this.state.active && <div><p>Off</p></div>}
                  <input type="radio" checked={this.state.active} name="devices" onChange={this.toggleStatus} />
               </div>
            </div>
         </div>
      );
   }

}

export default LightDevice;
