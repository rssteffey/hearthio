import React from 'react';
import Nav_Bar from '../Nav_Bar';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Nav_Bar', module)
  .add('Test', () => (
    <Nav_Bar />
  ));