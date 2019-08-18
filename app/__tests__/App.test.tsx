import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

it('renders correctly with defaults', () => {
  const App = renderer.create(<View />).toJSON();
  expect(App).toMatchSnapshot();
});
