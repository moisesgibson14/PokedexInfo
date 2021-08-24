import {render} from '@testing-library/react-native';
import React from 'react';
import Moves from '../src/components/Moves';

let component;

const props = {
  moves: [
    {
      move: {
        name: 'move1',
        url: 'url',
      },
      version_group_details: [],
    },
  ],
};

describe('', () => {
  beforeEach(() => {
    component = render(<Moves {...props} />);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId('move-container')).toBeDefined();
  });
});
