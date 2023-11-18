import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { CharactersContext } from '../../store';
import { it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

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

const mockSetCharacters = () => {};

describe('Tests for the Card List component', () => {
  it('Render test', () => {
    render(<Cards />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('Verify that the component renders the specified number of cards', () => {
    render(
      <MemoryRouter>
        <CharactersContext.Provider
          value={{
            characters: mockCharacters,
            setCharacters: mockSetCharacters,
          }}
        >
          <Cards />
        </CharactersContext.Provider>
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.queryAllByTestId('card')).toHaveLength(2);
  });
});
