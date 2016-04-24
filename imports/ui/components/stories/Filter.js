import React from 'react';
import Filter from '../Filter';
import { storiesOf, action } from '@kadira/storybook';

const light_filter = { filter_type: 'Lights', name: 'Lights', icon:'bulb.svg', status: true };
const plug_filter = { filter_type: 'Sockets', name: 'Power', icon:'plug.svg', status: false };

storiesOf('Filter', module)
  .add('Light', () => (
    <Filter object = {light_filter} />
  ))
  .add('Plug', () => (
    <Filter object = {plug_filter} />
  ));