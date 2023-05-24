import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscribe!: Subscription;
  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.subscribe = this.showsService.getAllShows().subscribe({
      next: (shows) => {
        this.showsService.setMovies = shows.movies;
        this.showsService.setSeries = shows.series;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
