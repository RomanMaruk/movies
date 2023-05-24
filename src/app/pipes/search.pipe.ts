import { Pipe, PipeTransform } from '@angular/core';
import { IShows } from '../models/shows.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(shows: IShows[], search = ''): IShows[] {
    if (!search.trim()) {
      return shows;
    }

    return shows.filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
