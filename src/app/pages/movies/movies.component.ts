import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  public p = 1;
  search = '';
  constructor(private showsService: ShowsService) {
    console.log(this.search);
  }

  public movies$ = this.showsService.movies$;
}
