import { configure } from '@kadira/storybook';
import '../client/style.css';

// Load any js file in stories directory for Storybook
const req = require.context('../imports/ui/components/stories/', true, /\.js$/);

function loadStories() {
	// Stories can also be individually defined in imported in stories/index.js
	// require('../imports/ui/components/stories/');
	req.keys().forEach(req);
}

configure(loadStories, module);
