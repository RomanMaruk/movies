import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTypeComponent } from './components/show-type/show-type.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  { path: '', component: ShowTypeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
