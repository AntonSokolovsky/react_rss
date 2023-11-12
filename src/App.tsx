import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { CharacterDetails, CharactersProvider, SearchProvider } from './store';

export default function App() {
  return (
    <CharacterDetails>
      <CharactersProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </CharactersProvider>
    </CharacterDetails>
  );
}
