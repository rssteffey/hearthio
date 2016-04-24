// Everything that should be loaded on page load
import $ from 'jquery';
import { panzoom } from 'jquery.panzoom';

$(document).ready(function() {
	$("#pan_and_scan").panzoom();
});