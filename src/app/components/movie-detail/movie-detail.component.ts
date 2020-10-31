
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { VideoResults } from 'src/app/models/video';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  selectedMovie: Movie;
  movieVideoUrl: string;
  videoResults: VideoResults[] = [];

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.movieId = parseInt(params.get('id'), 10);
      });


    this.moviesService.getSelectedMovie(this.movieId)
      .subscribe(data => {
        this.selectedMovie = data;
        // console.log(this.selectedMovie);
      });

    this.moviesService.getMovieVideo(this.movieId)
      .subscribe(data => {
        this.videoResults = data.results;
        if (this.videoResults.length !== 0) {
          this.movieVideoUrl = `https://www.youtube.com/embed/${data.results[0].key}?rel=0;&autoplay=1&mute=1&loop=1&playlist=${data.results[0].key}`;
        }
      });
  }

}
