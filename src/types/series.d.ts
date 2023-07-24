declare interface Series {
  id: number;
  name: string;
  image: ImageSerie;
}

declare interface ImageSerie {
  medium: string;
}

declare interface SerieDetails {
  id: number;
  name: string;
  poster: string;
  image: ImageSerie;
  daysAndTime: string;
  genres: string[];
  summary: string;
  seasons: Season[];
}

declare interface Episode {
  id: number;
  name: string;
  number: number;
  season: number;
  summary: string;
  image?: string;
}

declare interface Season {
  seasonNumber: number;
  episodes: Episode[];
}
