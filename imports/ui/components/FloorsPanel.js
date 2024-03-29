import React, { Component } from 'react';

import Floor from './Floor';


// Floors Panel
class FloorsPanel extends Component {

	getFloors() {
		return [
			{ _id: 1, id: 1, thumb: 'floor1.png', name: 'House', active: true },
			{ _id: 2, id: 2, thumb: 'floor2.png', name: 'Patio', active: false },
		];
	}


	renderFloors() {
		return this.getFloors().map((floor) => {
			return <Floor key={floor._id} object={floor} />;
		});
	}


	render() {
		return (
			<div id="floors-panel" className="colorScheme2">
				<div id="floors">
					{this.renderFloors()}
				</div>
			</div>
		);
	}

}

export default FloorsPanel;
