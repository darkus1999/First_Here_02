/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
//import { Loginpeople } from '@components/login';
//import { RegistroUserPeople } from '@components/login/RegistroUserPeople'

it('renders correctly', () => {
  renderer.create(<App />);
});
