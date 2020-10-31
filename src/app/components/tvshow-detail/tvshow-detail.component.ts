import { TvShow } from './../../models/tvshow';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';
import { VideoResults } from 'src/app/models/video';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.scss']
})
export class TvshowDetailComponent implements OnInit {
  tvshowId: number;
  selectedTvshow: TvShow;
  tvshowVideoUrl: string;
  videoResults: VideoResults[] = [];

  constructor(private activatedRoute: ActivatedRoute, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.tvshowId = parseInt(params.get('id'), 10);
      });

    this.showsService.getSelectedTvShow(this.tvshowId)
      .subscribe(data => {
        this.selectedTvshow = data;
        // console.log(this.selectedTvshow);
      });

    this.showsService.getTvShowVideo(this.tvshowId)
      .subscribe(data => {
        this.videoResults = data.results;
        if (this.videoResults.length !== 0) {
          this.tvshowVideoUrl = `https://www.youtube.com/embed/${data.results[0].key}?rel=0;&autoplay=1&mute=1&loop=1&playlist=${data.results[0].key}`;
        }
      });
  }

}
