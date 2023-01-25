import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
];

const config: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
