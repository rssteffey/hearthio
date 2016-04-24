import React from 'react';
import House_Panel from '../House_Panel';
import { storiesOf, action } from '@kadira/storybook';

const stuff = { };

storiesOf('House_Panel', module)
  .add('Light', () => (
    <House_Panel object = {stuff} />
  ));