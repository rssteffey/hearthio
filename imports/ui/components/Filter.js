import React, { Component } from 'react';

// Filter component - represents a filter to be rendered in the filters list in the Nav-Bar
class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active: props.object.status,
			name: props.object.name,
			iconName: props.object.icon,
		};
	}

	render() {
		let svgStyle = {
			height: '100%',
			width: '100%',
		};

		return (
			<div className="nav-item filter">
				<input type="checkbox"/>
				<label className="filter_label"  >
					<svg style={svgStyle} className="filter">
						<use xlinkHref={'/assets/icons/filters/filter_icons.svg#' + this.state.iconName + ''}></use>
					</svg>
				</label>
			</div>
		);
	}
}

export default Filter;
