import { ShowsService } from './../../services/shows.service';
import { TvShow } from './../../models/tvshow';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  @Input() tvshows: TvShow[] = [];
  @Input() searchedItem: string;
  @Input() galleryOrListView: string;
  @Input() tvshowsTotalPages: number;
  page = 1;

  constructor(private showsService: ShowsService, private router: Router) { }

  ngOnInit(): void {
  }

  toTvshowDetail(id: number): void {
    this.router.navigate(['/tvshow', id]);
  }

  moreTvshows(): void {
    this.page = this.page + 1;
    this.showsService.getSearchedTvShows(this.searchedItem, this.page)
      .subscribe(data => {
        this.tvshows = this.tvshows.concat(data.results);
        // console.log(data);
      });
    // console.log(this.page);
  }

}
