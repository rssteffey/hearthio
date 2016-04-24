import React from 'react';
import Floor from '../Floor';
import { storiesOf, action } from '@kadira/storybook';

const floor1 = { id:1, thumb: 'floor1.png', name: 'House', active: true };
const floor2 = { id:2, thumb: 'floor2.png', name: 'Patio', active: false };

storiesOf('Floor', module)
  .add('Floor 1', () => (
    <Floor object = {floor1} />
  ))
  .add('Floor 2', () => (
    <Floor object = {floor2} />
  ));