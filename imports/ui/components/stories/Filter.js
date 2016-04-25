import React from 'react';
import Filter from '../Filter';
import { storiesOf, action } from '@kadira/storybook';

const lightFilter = { filterType: 'Lights', name: 'Lights', icon: 'bulb.svg', status: true };
const plugFilter = { filterType: 'Sockets', name: 'Power', icon: 'plug.svg', status: false };

storiesOf('Filter', module)
   .add('Light', () => (
      <Filter object={lightFilter} />
   ))
   .add('Plug', () => (
      <Filter object={plugFilter} />
   ));
