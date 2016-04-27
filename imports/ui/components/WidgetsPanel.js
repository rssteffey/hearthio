import React, { Component } from 'react';

import Widget from './widgets/Widget';
import OnOff from './widgets/OnOff';
import HsPicker from './widgets/HsPicker';
import Dimmer100 from './widgets/Dimmer100';


class WidgetsPanel extends Component {
	getWidgets() {
		return [
			{ _id: 1, widgetType: 'OnOff', name: 'On/Off', status: true },
			{ _id: 2, widgetType: 'HsPicker', name: 'Hue and Saturation', hue: 76, sat: 12 },
			{ _id: 3, widgetType: 'Dimmer100', name: 'Dimmer', dimValue: 60 },
			{ _id: 4, widgetType: 'BatteryLife', name: 'Battery Life', battery: 0.76 },
			{ _id: 5, widgetType: 'AlarmTripped', name: 'Alarm Tripped', active: true },
		];
	}


	getComponent(widgetType) {
		/* Maintain an array of Widget types here for now*/
		const Components = [];
		Components.Widget = Widget;
		Components.OnOff = OnOff;
		Components.HsPicker = HsPicker;
		Components.Dimmer100 = Dimmer100;

		if (typeof Components[widgetType] === 'undefined') {
			return Components.Widget;
		}

		return Components[widgetType];
	}


	renderWidgets() {
		return this.getWidgets().map((widget) => {
			let MyComponent = this.getComponent(widget.widgetType);
			return <MyComponent key={widget._id} object={widget} />;
		});
	}


	render() {
		return (
			<div id="widgets">
			{this.renderWidgets()}
			</div>
		);
	}

}

export default WidgetsPanel;
