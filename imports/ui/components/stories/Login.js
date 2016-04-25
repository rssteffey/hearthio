import React from 'react';
import Login from '../Login';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Login', module)
	.add('does not contain errors', () => (
		<button onClick={action('clicked')}>My First Button</button>
	))
	.add('contains errors', () => (
		<Login />
	));
