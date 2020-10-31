import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() searchedItem: string;
  @Input() galleryOrListView: string;
  @Input() totalPages: number;
  page = 1;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }

  toMovieDetail(id: number): void {
    this.router.navigate(['/movie', id]);
  }

  moreMovies(): void {
    this.page = this.page + 1;
    this.moviesService.getSearchedMovies(this.searchedItem, this.page)
      .subscribe(data => {
        this.movies = this.movies.concat(data.results);
        // console.log(data);
      });
    // console.log(this.page);
  }

}
