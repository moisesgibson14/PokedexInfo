import {render} from '@testing-library/react-native';
import React from 'react';
import Stats from '../src/components/Stats';
let component;

const props = {
  stats: [
    {
      base_stat: 1,
      effort: 1,
      stat: {
        name: 'string',
        url: 'string',
      },
    },
  ],
};

describe('Stats component', () => {
  beforeEach(() => {
    component = render(<Stats {...props} />);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId('title-stats')).toBeDefined();
  });
});
