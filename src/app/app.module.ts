import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowTypeComponent } from './components/show-type/show-type.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardShowsComponent } from './components/card-shows/card-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowTypeComponent,
    MoviesComponent,
    SeriesComponent,
    FiltersComponent,
    CardShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
