import $ from 'jquery';
import { panzoom } from 'jquery.panzoom';


// Allow panning of background image
$(document).ready(function() {
	console.log('panzoom loaded');
	$("#pan_and_scan").panzoom();
});
