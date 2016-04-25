import React, { Component } from 'react';

// Filter component - represents a filter to be rendered in the filters list in the Nav-Bar
class Filter extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	     	active: props.object.status,
	      	name: props.object.name,
	      	icon_name: props.object.icon,
	    };
	}

	render() {

		let svg_style = {
			height: '100%',
			width: '100%'
		};

		return (
		  <div className="nav-item filter">
		    <input type="checkbox"/>
		    <label className="filter_label"  >
	    		<svg style = {svg_style}>
	    			<use xlinkHref={'/assets/icons/filters/filter_icons.svg#' + this.state.icon_name + ''}></use>
	    		</svg>
			</label>
		  </div>
		);
	}
}

export default Filter;