export interface IResponse {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: {
        name: string;
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
      url: string;
      created: string;
    },
  ];
}
