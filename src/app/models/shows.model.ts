export interface IAllShows {
  total: number;
  entries: IShows[];
}

export interface IShows {
  title: string;
  description: string;
  programType: 'movies' | 'series';
  images: IImages;
  releaseYear: number;
}

export interface IImages {
  posterArt: {
    url: string;
    width: number;
    height: number;
  };
}
