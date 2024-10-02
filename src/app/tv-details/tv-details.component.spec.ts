import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetailsComponent } from './tv-details.component';

describe('TvDetailsComponent', () => {
  let component: TvDetailsComponent;
  let fixture: ComponentFixture<TvDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvDetailsComponent]
    });
    fixture = TestBed.createComponent(TvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
