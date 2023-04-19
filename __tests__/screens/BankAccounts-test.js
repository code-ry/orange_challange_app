import React from 'react';
import renderer from 'react-test-renderer';
import BankAccountScreen from '../../src/screens/BankAccountScreen';

test('renders correctly', () => {
  const tree = renderer.create(<BankAccountScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});