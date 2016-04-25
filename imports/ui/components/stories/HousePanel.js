import React from 'react';
import HousePanel from '../HousePanel';
import { storiesOf, action } from '@kadira/storybook';

const stuff = { };

storiesOf('HousePanel', module)
   .add('Light', () => (
      <HousePanel object={stuff} />
   ));
