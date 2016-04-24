import React from 'react';
import Hs_Picker from '../../widgets/Hs_Picker';
import { storiesOf, action } from '@kadira/storybook';

const no_saturation = { _id: 2, widget_type: 'Hs_Picker', name: 'Hue and Saturation', hue: 76, sat: 0 };
const saturation = { _id: 2, widget_type: 'Hs_Picker', name: 'Hue and Saturation', hue: 76, sat: 200 };

storiesOf('Hs_Picker', module)
  .add('No Saturation', () => (
    <Hs_Picker object = {no_saturation} />
  ))
  .add('Lots O\' Saturation', () => (
    <Hs_Picker object = {saturation} />
  ));