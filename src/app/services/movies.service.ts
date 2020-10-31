import { Video } from './../models/video';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MoviePage } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_KEY = '8f3e1be54c524b8eee6db3043e9ffd51';

  constructor(private httpClient: HttpClient) { }

  getTopRatedMovies(): Observable<MoviePage> {
    return this.httpClient.get<MoviePage>(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US`);
  }

  getSearchedMovies(query, page): Observable<MoviePage> {
    return this.httpClient.get<MoviePage>(
    `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${query}&page=${page}`);
  }
  getSelectedMovie(id): Observable<Movie> {
    return this.httpClient.get<Movie>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`);
  }
  getMovieVideo(id): Observable<Video> {
    return this.httpClient.get<Video>(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}`);
  }

}
