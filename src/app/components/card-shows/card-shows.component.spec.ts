import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShowsComponent } from './card-shows.component';

describe('CardShowsComponent', () => {
  let component: CardShowsComponent;
  let fixture: ComponentFixture<CardShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
