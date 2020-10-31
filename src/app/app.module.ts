
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FormsModule } from '@angular/forms';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TvshowDetailComponent } from './components/tvshow-detail/tvshow-detail.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    HighlightTextPipe,
    MovieDetailComponent,
    SafeUrlPipe,
    TvshowDetailComponent,
    TvshowsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
