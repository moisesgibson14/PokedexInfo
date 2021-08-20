import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

describe('Testing HomeScreen', () => {
  test('should show home screen flat list', async () => {
    const {getByText, getByTestId, debug} = render(<HomeScreen />);
    debug();
    // const mockFn = jest.fn();
    // jest.mock('react-native-safe-area-context', () => {
    //   return {
    //     useSafeArea: () => {
    //       return {
    //         bottom: 50, // mock whatever field is used
    //       };
    //     },
    //   };
    // });
    // const component = <HomeScreen />;
    // const {findByText, findAllByText} = render(component);

    // const header = await findByText('bulbasaur');
    // expect(header).toBeTruthy();
    // const {debug} = render(<HomeScreen />);
    // debug();
  });
});
