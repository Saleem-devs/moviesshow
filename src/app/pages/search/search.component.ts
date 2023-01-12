import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private service: MovieApiService) {}

  searchresult: any = [];
  ngOnInit(): void {}

  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      this.searchresult = result.results;
    });
  }
}
