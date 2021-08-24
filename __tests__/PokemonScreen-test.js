import React from 'react';
import {render} from '@testing-library/react-native';
import PokemonScreen from '../src/screens/PokemonScreen';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

let component;
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
jest.mock('react-native-safe-area-context', () => {
  return {
    useSafeArea: () => {
      return {
        top: 50,
      };
    },
  };
});
const MySafeArea = React.createContext(null);
describe('PokemonScreen Component', () => {
  const route = {
    route: {
      params: {
        simplePokemon: {
          id: '1',
          name: 'bulbasor',
          picture: 'picture',
          color: 'red',
        },
        color: 'red',
      },
    },
    navigation: '',
  };
  beforeEach(() => {
    component = render(
      <MySafeArea.Provider>
        <PokemonScreen {...route} />
      </MySafeArea.Provider>,
    );
  });

  it('shoul be defined', () => {
    console.log(component);
  });
});
