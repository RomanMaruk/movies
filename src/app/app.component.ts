import { Component, OnInit } from '@angular/core';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.showsService.getAllShows().subscribe({
      next: (shows) => {
        console.log(shows);
        this.showsService.setMovies = shows.movies;
        this.showsService.setSeries = shows.series;
      },
    });
  }
}
