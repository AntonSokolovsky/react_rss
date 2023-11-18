export default class Api {
  private static baseUrl = 'https://rickandmortyapi.com/api/character';

  static async getAllCharacters() {
    const response = await fetch(`${this.baseUrl}`);
    return response.json();
  }

  static async searchCharactersByName(term: string) {
    const response = await fetch(`${this.baseUrl}?name=${term}`);
    return response.json();
  }
}
