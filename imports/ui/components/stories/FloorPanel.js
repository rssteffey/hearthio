import React from 'react';
import FloorsPanel from '../FloorsPanel';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Floors_Panel', module)
   .add('Test', () => (
      <FloorsPanel />
   ));
