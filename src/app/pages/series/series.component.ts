import { Component } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  constructor(private showsService: ShowsService) {}

  public movies$ = this.showsService.series$;
}
