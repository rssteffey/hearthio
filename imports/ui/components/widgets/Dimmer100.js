import React, { Component } from 'react';


class Dimmer100 extends Component {
   /*
   getInitialState() {
   return {
   dimValue: this.props.object.dimValue
   };
   }
   */

   constructor(props) {
      super(props);
      this.state = { dimValue: props.object.dimValue };
      this.dimChange = this.dimChange.bind(this);
   }


   dimChange(event) {
      this.setState({ dimValue: event.target.value });
      this.changeBrightness();
   }

   changeBrightness() {
      // Justin, API call here please.
   }


   render() {
      const flexStyle = {
         display: 'flex',
      };

      return (
         <div className="dimmer_100 widget">
            <h3>{this.props.object.name} </h3>
            <div style={flexStyle} >
               <div id="slider">
                  <div><p>{this.state.dimValue} %</p></div>
                  <input type="range" id="dimRange" min="0" max="100" step="1" defaultValue={this.props.object.dimValue} onChange={this.dimChange} onInput={this.dimChange} />
               </div>
            </div>
         </div>
      );
   }

}

export default Dimmer100;
