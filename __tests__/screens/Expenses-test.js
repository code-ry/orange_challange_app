import React from 'react';
import renderer from 'react-test-renderer';
import ExpensesScreen from '../../src/screens/ExpensesScreen';

test('renders correctly', () => {
  const tree = renderer.create(<ExpensesScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});