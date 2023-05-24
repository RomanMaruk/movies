import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IAllShows, IShows, IShowsModified } from '../models/shows.model';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private movies = new BehaviorSubject<IAllShows>({ total: 0, entries: [] });
  private series = new BehaviorSubject<IAllShows>({ total: 0, entries: [] });

  public movies$ = this.movies.asObservable();
  public series$ = this.series.asObservable();

  constructor(private http: HttpClient) {}

  getAllShows(): Observable<IShowsModified> {
    const url =
      'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

    return this.http.get<IAllShows>(url).pipe(
      map((shows) => {
        const movies: IShows[] = [];
        const series: IShows[] = [];

        shows.entries.forEach((s) => {
          if (s.programType === 'movies') {
            movies.push(s);
          } else {
            series.push(s);
          }
        });

        return {
          movies: {
            total: movies.length,
            entries: movies,
          },
          series: {
            total: series.length,
            entries: series,
          },
        };
      })
    );
  }

  set setMovies(shows: IAllShows) {
    this.movies.next(shows);
  }
  set setSeries(shows: IAllShows) {
    this.series.next(shows);
  }
}
