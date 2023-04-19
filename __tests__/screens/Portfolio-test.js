import React from 'react';
import renderer from 'react-test-renderer';
import PortfolioScreen from '../../src/screens/PortfolioScreen';

test('renders correctly', () => {
  const tree = renderer.create(<PortfolioScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});