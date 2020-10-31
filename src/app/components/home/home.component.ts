import { TvshowsComponent } from './../tvshows/tvshows.component';
import { TvShow } from './../../models/tvshow';
import { ShowsService } from './../../services/shows.service';
import { Movie } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  tvshows: TvShow[] = [];
  totalPages: number;
  tvshowsTotalPages: number;
  movieOrShow = 'tvshows';
  galleryOrListView = 'gallery';
  searchedItem: string;
  @ViewChild('moviesComponent', { static: false }) moviesComponent: MoviesComponent;
  @ViewChild('tvshowsComponent', { static: false }) tvshowsComponent: TvshowsComponent;

  constructor(private moviesService: MoviesService, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.searchedItem = JSON.parse(sessionStorage.getItem('searched')) || '';
    this.movieOrShow = JSON.parse(sessionStorage.getItem('option')) || 'tvshows';
    this.galleryOrListView = JSON.parse(sessionStorage.getItem('galleryOrList')) || 'gallery';
    this.searchFunction();
  }

  switchTo(option: string): void {
    this.movieOrShow = option;
    sessionStorage.setItem('option', JSON.stringify(this.movieOrShow));
    window.scroll(0, 0);
  }

  galleryOrList(option): void {
    this.galleryOrListView = option;
    sessionStorage.setItem('galleryOrList', JSON.stringify(this.galleryOrListView));
    window.scroll(0, 0);
  }

  searchFunction(): void {
    sessionStorage.setItem('searched', JSON.stringify(this.searchedItem));
    window.scroll(0, 0);

    // setTimeout(() => {

    if (this.searchedItem.length >= 3) {

      this.moviesService.getSearchedMovies(this.searchedItem, 1)
        .subscribe(data => {
          this.movies = data.results;
          this.totalPages = data.total_pages;
          if (this.movieOrShow === 'movies') {
            this.moviesComponent.page = 1;
          }
        });

      this.showsService.getSearchedTvShows(this.searchedItem, 1)
        .subscribe(data => {
          this.tvshows = data.results;
          this.tvshowsTotalPages = data.total_pages;
          if (this.movieOrShow === 'tvshows') {
            this.tvshowsComponent.page = 1;
          }
          // console.log(this.tvshowsTotalPages);
        });

    } else {
      this.moviesService.getTopRatedMovies()
        .subscribe(data => {
          this.movies = data.results.slice(0, 10);
        });
      this.showsService.getTopRatedTvShows()
        .subscribe(data => {
          this.tvshows = data.results.slice(0, 10);
        });
    }
    // }, 1000);

  }


}
