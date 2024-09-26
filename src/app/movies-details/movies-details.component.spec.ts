import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailsComponent } from './movies-details.component';

describe('MoviesDetailsComponent', () => {
  let component: MoviesDetailsComponent;
  let fixture: ComponentFixture<MoviesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesDetailsComponent]
    });
    fixture = TestBed.createComponent(MoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
