import {render} from '@testing-library/react-native';
import React from 'react';
import {Navigation} from '../src/navigator/Navigator';

let component;

const mockedDispatch = jest.fn();
// Mocks like this need to be configured at the top level
// of the test file, they can't be setup inside your tests.
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('Navigation component', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
    component = render(<Navigation />);
  });
  it('should render correctly', () => {
    console.log(component);
  });
});
