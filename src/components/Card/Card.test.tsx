import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
// import { Routes, Route } from 'react-router-dom';
import { it, describe } from 'vitest';
import Card from './Card';
import { MemoryRouter } from 'react-router';
// import { CharacterDetailsContext, CharactersContext } from '../../store';
// import CharacterDetalils from '../../Pages/CharacterDetails/CharacterDetalils';
import '@testing-library/jest-dom';
// import Cards from '../Cards/Cards';
import 'react-router-dom';

const mockCharacter = {
  id: 1,
  name: 'Test Character',
  image: 'test-image.jpg',
  type: 'Human',
  gender: 'Male',
  species: 'Human',
  status: 'Alive',
};

// const mockCharacters = [
//   {
//     id: 1,
//     name: 'Test Character',
//     image: 'test-image.jpg',
//     type: 'Human',
//     gender: 'Male',
//     species: 'Human',
//     status: 'Alive',
//   },
// ];

// const mockSetCharacters = () => {};

describe('Test for Card component', () => {
  it('Render test', () => {
    render(
      <MemoryRouter>
        <Card character={mockCharacter} />
      </MemoryRouter>
    );
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument;
  });

  it('Ensure that the card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <Card character={mockCharacter} />
      </MemoryRouter>
    );
    Object.entries(mockCharacter)
      .filter(([field]) => {
        field !== 'id' && field !== 'image';
      })
      .map(([, value]) => {
        expect(screen.getByText(value)).toBeInTheDocument();
      });
    expect(
      screen.getByAltText(`${mockCharacter.name}photo`)
    ).toBeInTheDocument();
  });
  //ToDo: implement the test
  // it('Validate that clicking on a card opens a detailed card component', async () => {
  //   render(
  //     <CharactersContext.Provider
  //       value={{
  //         characters: mockCharacters,
  //         setCharacters: mockSetCharacters,
  //       }}
  //     >
  //       <CharacterDetailsContext.Provider
  //         value={{ isOpen: true, setIsOpen: () => {} }}
  //       >
  //         <MemoryRouter initialEntries={['/home/1', '/home']}>
  //           <Routes>
  //             <Route path="/home" element={<Cards />} />
  //             <Route path="/home/:id" element={<CharacterDetalils />} />
  //           </Routes>
  //         </MemoryRouter>
  //       </CharacterDetailsContext.Provider>
  //     </CharactersContext.Provider>
  //   );
  //   screen.debug();
  //   expect(screen.getByRole('img')).toBeInTheDocument();
  //   user.click(screen.getByRole('img'));
  //   expect(await screen.findByTestId('detail')).toBeInTheDocument();
  // });
});
