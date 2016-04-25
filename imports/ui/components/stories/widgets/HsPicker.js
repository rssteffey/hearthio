import React from 'react';
import HsPicker from '../../widgets/HsPicker';
import { storiesOf, action } from '@kadira/storybook';

const noSaturation = { _id: 2, widgetType: 'HsPicker', name: 'Hue and Saturation', hue: 76, sat: 0 };
const saturation = { _id: 2, widgetType: 'HsPicker', name: 'Hue and Saturation', hue: 76, sat: 200 };

storiesOf('Hs_Picker', module)
   .add('No Saturation', () => (
      <HsPicker object={noSaturation} />
   ))
   .add('Lots O\' Saturation', () => (
      <HsPicker object={saturation} />
   ));
