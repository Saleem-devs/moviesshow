import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiService,
    private router: ActivatedRoute
  ) {}

  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result);
      this.getMovieDetailResult = result;
    });
  }

  // getMovieVideo

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
      console.log(result, 'vid');
    });
  }

  // getmoviecast

  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult = result.cast;
      console.log(this.getMovieCastResult);
    });
  }
}
