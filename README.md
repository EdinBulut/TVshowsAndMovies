# TV Shows And Movies (https://tvshowsandmovies-5d3ba.web.app)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Detailed instruction how to run this app

1. Find in terminal folder where you want to download this app and
run `git clone https://github.com/EdinBulut/TVshowsAndMovies.git`

`(.../SELECTED_FOLDER> git clone https://github.com/EdinBulut/TVshowsAndMovies.git)`


2. In SELECTED_FOLDER you will get project folder TVshowsAndMovies. Navigate to project folder and
run `npm install` to install node_modules

`(.../SELECTED_FOLDER/TVshowsAndMovies> npm install)`


3. When second step is finished then in the same folder you have to
run `ng serve` and when dev server is listening on localhost:4200 navigate to `http://localhost:4200/`
or run `ng serve --o` to automatically open `http://localhost:4200/` when app is ready

`(.../SELECTED_FOLDER/TVshowsAndMovies> ng serve --o)`


If you have done these three simple steps correctly when you open your browser on `http://localhost:4200/`
you will get this: [https://tvshowsandmovies-5d3ba.web.app](https://tvshowsandmovies-5d3ba.web.app).
App is deployed on firebase.




## About app

When the app loads, the TV SHOWS tab is selected.

Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.
You have option to show MOVIES/TV SHOWS results in gallery view or in a list view. When the app loads, gallery view is selected.

The search field is live and react to any change in the input field.
The search is performed only when there are 3 or more characters in the search bar.
When there are less than 3 characters in the search bar, the content revert back to the top 10 MOVIES/TV SHOWS.
When the search is performed, results appear under the search box.

Switching between tabs while searching trigger the search again with the same search term for the selected tab and update the results.
When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.

User can be taken to the details view if he navigate to `http://localhost:4200/movie/MOVIE_ID` or `http://localhost:4200/tvshow/TVSHOW_ID`
(for example: if he navigate to `http://localhost:4200/movie/238` he will be taken to the detailed view of the Godfather).
The Detailed View of the Movie/TV Show shows the cover image and in case of Movies/TV Shows which have a trailer should show the trailer video instead of the cover image. 
Next to/below the image/trailer some basic information regarding the selected Movie/TV Show are shown.

The Back button return the user back to where he was and with the same state before clicking to see more information about a Movie/TV Show
(meaning that the correct tab is selected and if the user came from search - the search result with the search term is there).

If user navigate to page that doesn't exist 'Page not found' will be shown.










## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
