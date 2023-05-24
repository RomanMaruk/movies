import { Component, Input } from '@angular/core';
import { IShows } from 'src/app/models/shows.model';

@Component({
  selector: 'app-card-shows[show]',
  templateUrl: './card-shows.component.html',
  styleUrls: ['./card-shows.component.scss'],
})
export class CardShowsComponent {
  @Input() show!: IShows;
}
