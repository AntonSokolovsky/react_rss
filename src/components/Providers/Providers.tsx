import { SearchProvider } from '@/store';
import { CharactersProvider } from '@/store';
import { CharacterDetailsProvider } from '@/store';

export function Providers({ children }) {
  return (
    <CharacterDetailsProvider>
      <SearchProvider>
        <CharactersProvider>{children}</CharactersProvider>
      </SearchProvider>
    </CharacterDetailsProvider>
  );
}
