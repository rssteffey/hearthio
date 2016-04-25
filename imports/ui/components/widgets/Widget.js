import React, { Component } from 'react';


// Widget component - represents a widget to be rendered in the widgets list
class Widget extends Component {
   render() {
      return (
         <div className="widget">
            <h3>{this.props.object.name}</h3>
            <p>Oh... this is awkward.  This widget doesn't seem to exist yet.</p>
         </div>
      );
   }
}

export default Widget;
