export interface TvShow {
  poster_path: string;
  id: number;
  overview: string;
  first_air_date: Date;
  name: string;
  vote_average: number;
}

export interface TvShowPage {
  page: number;
  total_results: number;
  total_pages: number;
  results: TvShow[];
}
