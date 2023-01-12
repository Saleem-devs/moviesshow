import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionResult: any = [];
  adventureResult: any = [];
  animationResult: any = [];
  comedyResult: any = [];
  documentaryResult: any = [];
  scienceResult: any = [];
  thrillerResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMoviApiData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceMovie();
    this.thrillerMovie();
  }

  // bannerdata

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  // trendingmoviedata

  trendingMoviApiData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }

  // action

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionResult = result.results;
    });
  }

  // adventure

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureResult = result.results;
    });
  }

  // animation;

  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationResult = result.results;
    });
  }

  // comedy

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyResult = result.results;
    });
  }

  // documentary

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryResult = result.results;
    });
  }

  // science

  scienceMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.scienceResult = result.results;
    });
  }

  // thriller

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerResult = result.results;
    });
  }
}
