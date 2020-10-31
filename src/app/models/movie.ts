export interface Movie {
  poster_path: string;
  id: number;
  overview: string;
  release_date: Date;
  title: string;
  vote_average: number;
}

export interface MoviePage {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

