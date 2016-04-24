import { configure } from '@kadira/storybook';

function loadStories() {
  // Stories are imported in stories/index.js
  require('../imports/ui/components/stories/');
}

configure(loadStories, module);