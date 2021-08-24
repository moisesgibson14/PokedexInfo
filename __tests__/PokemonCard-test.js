import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import PokemonCard from '../src/components/PokemonCard';

const mockedDispatch = jest.fn();

const props = {
  pokemon: {
    id: '1',
    name: 'charizart',
    picture: 'string',
    color: 'string',
  },
};

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

let component;

describe('Pokemon Card test ', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
    component = render(<PokemonCard {...props} />);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should selected a pokemon and rediret', () => {
    const button = component.getByTestId('select-pokemon');
    fireEvent(button, 'press');
  });
});
