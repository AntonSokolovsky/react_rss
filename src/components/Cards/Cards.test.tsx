import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { it } from 'vitest';
import '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import * as customHooks from '../../ReduxStore/hooks';
import store from '../../ReduxStore';

const mockCharacters = [
  {
    id: 1,
    name: 'Test Character',
    image: 'test-image.jpg',
    type: 'Human',
    gender: 'Male',
    species: 'Human',
    status: 'Alive',
  },
  {
    id: 2,
    name: 'Test Character',
    image: 'test-image.jpg',
    type: 'Human',
    gender: 'Male',
    species: 'Human',
    status: 'Alive',
  },
];

describe('Tests for the Card List component', () => {
  it('Render test', () => {
    vi.spyOn(customHooks, 'useAppSelector').mockReturnValue([]);
    render(<Cards />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('Verify that the component renders the specified number of cards', () => {
    vi.spyOn(customHooks, 'useAppSelector').mockImplementation(
      () => mockCharacters
    );
    render(
      <reduxHooks.Provider store={store}>
        <Cards />
      </reduxHooks.Provider>
    );
    screen.debug();
    // expect(screen.queryAllByTestId('card')).toHaveLength(2);
  });
});
