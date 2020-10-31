import { TvShow, TvShowPage } from './../models/tvshow';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  API_KEY = '8f3e1be54c524b8eee6db3043e9ffd51';

  constructor(private httpClient: HttpClient) { }

  getTopRatedTvShows(): Observable<TvShowPage> {
    return this.httpClient.get<TvShowPage>(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.API_KEY}&page=1`);
  }

  getSearchedTvShows(query, page): Observable<TvShowPage> {
    return this.httpClient.get<TvShowPage>(
    `https://api.themoviedb.org/3/search/tv?api_key=${this.API_KEY}&page=${page}&query=${query}`);
  }
  getSelectedTvShow(id): Observable<TvShow> {
    return this.httpClient.get<TvShow>(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${this.API_KEY}`);
  }
  getTvShowVideo(id): Observable<Video> {
    return this.httpClient.get<Video>(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.API_KEY}`);
  }
}
