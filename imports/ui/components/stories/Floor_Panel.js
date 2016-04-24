import React from 'react';
import Floors_Panel from '../Floors_Panel';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Floors_Panel', module)
  .add('Test', () => (
    <Floors_Panel />
  ));