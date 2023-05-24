import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() emitName = new EventEmitter<string>();

  name = new FormControl('');

  ngOnInit(): void {
    this.name.valueChanges.subscribe((text) => {
      this.emitName.emit(text ?? '');
    });
  }
}
